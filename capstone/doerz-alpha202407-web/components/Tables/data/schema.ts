import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  taskIdName: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  rewardSize: z.string(),
  brand: z.string(),
  description: z.string(),
  image: z.string(),
})

const taskSchemaMakerzForm = z.object({
  taskIdName: z.string().nonempty("Task ID Name is required"),
  title: z.string().nonempty("Title is required"),
  status: z.string().nonempty("Status is required"),
  label: z.string().nonempty("Label is required"),
  rewardSize: z.enum(["small", "medium", "large"]),
  brand: z.string().nonempty("Brand is required"),
  description: z.string().nonempty("Description is required"),
  image: z.string().url().optional(),
  draft: z.enum(["true", "false"]),
  ownerUser: z.string().nonempty("Owner User is required"),
  ownerGroup: z.string().optional(),
  ownerAdmin: z.string().optional(),
  ownerProject: z.string().optional(),
  userInstructions: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
});


export const taskMakerzSchema = z.object({
  taskIdName: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  rewardSize: z.string(),
  brand: z.string(),
  description: z.string(),
  image: z.string(),
  ownerUser: z.string(),
})

export type Task = z.infer<typeof taskSchema>
export type MakerzTask = z.infer<typeof taskMakerzSchema>