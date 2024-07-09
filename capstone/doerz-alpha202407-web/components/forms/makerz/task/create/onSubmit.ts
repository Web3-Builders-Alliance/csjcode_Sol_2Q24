import { v4 as uuidv4 } from "uuid";
import { getRewardSize } from "./utils";
import {
  OWNER_USER,
  OWNER_GROUP,
  OWNER_ADMIN,
  OWNER_ORG,
  getInitialValues,
} from "./initialConfig";
import { State } from "./reducerMakerzTaskFor";

export const onSubmit = async (data: any, state: State, dispatch: any) => {
  const rewardSize = getRewardSize(data.rewardInDOERZ);

  console.log(`Submitted`);

  const taskIdName = `${OWNER_ORG}-tk${state.taskIdNameShort}`;

  const newTask = {
    ...data,
    taskId: uuidv4(),
    dateCreated: Date.now(),
    dateStarted: Date.now(),
    dateModified: Date.now(),
    dateExpired: Date.now() + 30 * 24 * 60 * 60 * 1000, // 30 days from now
    rewardId: uuidv4(),
    rewardSize,
    ownerUser: OWNER_USER,
    taskIdName,
    draft: state.draft,
    fundingStatus: state.fundingStatus,
    fundingPool: state.fundingPool,
    taskType: state.taskType,
    ownershipTokenAddress: state.ownershipTokenAddress,
    ownershipTokenName: state.ownershipTokenName,
    ownershipTokenSymbol: state.ownershipTokenSymbol,
    ownershipTokenAmount: state.ownershipTokenAmount,
    title: state.title,
    description: state.description,
    ownerGroup: state.ownerGroup,
    ownerAdmin: state.ownerAdmin,
    ownerOrg: OWNER_USER,
    rewardInDOERZ: state.rewardInDOERZ,
    image: state.image,
    userInstructions: state.userInstructions,
  };

  dispatch({
    type: "SET_FIELD",
    field: "makerzFormStep",
    value: state.makerzFormStep + 1,
  });

  console.log(`In onSubmit`);
  console.log(newTask);

  console.log(JSON.stringify(newTask));

  console.log("Task created successfully!");

  if (state.makerzFormStep === 5) {
    alert(JSON.stringify(newTask));

    // Mock API call to JSON server
    // const response = await fetch("http://localhost:3000/tasks", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newTask),
    // });
    // if (response.ok) {
    //   console.log("Task created successfully!");
    // } else {
    //   console.error("Failed to create task.");
    // }
  }
};
