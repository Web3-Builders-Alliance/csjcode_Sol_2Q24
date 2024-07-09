import { z } from "zod";


const baseSchema = z.object({
  taskIdNameShort: z.string().nonempty("Task ID Name is required"),
  title: z.string().nonempty("Title is required"),
  taskType: z.string().nonempty("Task Type is required"),
  draft: z.boolean().default(true), // Changed to boolean
  description: z.string().nonempty("Description is required"),
  // ownershipTokenAddress: z.string().nonempty("Token Address is required"),
  // rewardInDOERZ: z
  //   .number()
  //   .multipleOf(1)
  //   .nonnegative("Reward in DOERZ is required"),
});

const additionalSchemas: { [key: string]: z.ZodObject<any> } = {
  tokenOwnership: z.object({
    ownershipTokenName: z.string().min(1,"Ownership Token Name is required"),
    ownershipTokenSymbol: z.string().min(1,"Ownership Token Symbol is required"),
    ownershipTokenAddress: z.string().min(1,"Token Address is required"),
    ownershipTokenAmount: z.number().min(1,"Token Amount is required"),
  }),
  // nftOwnership: z.object({
  //   nftAddress: z.string().nonempty("NFT Address is required"),
  //   nftId: z.string().nonempty("NFT ID is required"),
  // }),
  // socialShare: z.object({
  //   platform: z.enum(["twitter", "facebook", "instagram"]).nonempty("Platform is required"),
  //   shareUrl: z.string().url("Share URL must be a valid URL"),
  // }),
  // Add more schemas for other task types as needed
};
const generateSchema = (taskType: string) => {
  const additionalSchema = additionalSchemas[taskType];
  if (additionalSchema) {
    return baseSchema.merge(additionalSchema);
  }
  return baseSchema;
};

export const taskSchemaMakerzForm = (taskType: string) => generateSchema(taskType);

export type TaskSchemaMakerzForm = z.infer<ReturnType<typeof generateSchema>>;



// export const taskSchemaMakerzForm = z.object({
//   taskIdNameShort: z.string().nonempty("Task ID Name is required"),
//   title: z.string().nonempty("Title is required"),

//   taskType: z.string().nonempty("Task Type is required"),
//   draft: z.enum(["true", "false"]),
//   description: z.string().nonempty("Description is required"),
//   rewardInDOERZ: z
//     .number()
//     .multipleOf(1)
//     .nonnegative("Reward in DOERZ is required"),

//       // ownerUser: z.string().nonempty("Owner User is required"),
//   // ownerGroup: z.string().optional(),
//   // ownerAdmin: z.string().optional(),

//   // rewardSize: z.enum(["small", "medium", "large"]),

//   // status: z.string().nonempty("Status is required"),
//   // brand: z.string().nonempty("Brand is required"),

//   // image: z.string().url().optional(),

//   // ownerUser: z.string().nonempty("Owner User is required"),
//   // ownerGroup: z.string().optional(),
//   // ownerAdmin: z.string().optional(),
//   // ownerProject: z.string().optional(),
//   // userInstructions: z.array(z.string()).optional(),
//   // tags: z.array(z.string()).optional(),
// });

// export type TaskSchemaMakerzForm = z.infer<typeof taskSchemaMakerzForm>;


