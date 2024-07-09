// reducerMakerzTaskForm.ts
import {
  OWNER_GROUP,
  OWNER_ADMIN,
  FUNDING_POOL,
} from "./initialConfig";
import { generateShortDateTime } from "@/utils/dates";

export const createTaskIdNameShort = () => {
  const taskIdNameShort = generateShortDateTime();
  const taskIdName = `${OWNER_GROUP}-${taskIdNameShort}`;
  return {
    taskIdNameShort: taskIdNameShort,
    taskIdName: taskIdName,
  };
};

export const initialState = {
  makerzFormStep: 1,
  ...createTaskIdNameShort(),
  draft: true,
  taskType: "ownership",
  ownershipTokenAddress: "",
  ownershipTokenName: "",
  ownershipTokenSymbol: "",
  ownershipTokenAmount: 1,
  title: "",
  description: "",
  ownerGroup: OWNER_GROUP,
  ownerAdmin: OWNER_ADMIN,
  rewardInDOERZ: "100",
  images: [] as string[], // Change from single image to array of images
  userInstructions: [] as string[],
  fundingStatus: !!FUNDING_POOL[0].id,
  fundingPool: FUNDING_POOL[0].id,
  errors: {},
  hasMissingFields: true
};

export type State = typeof initialState;

export type Action =
  | { type: "SET_FIELD"; field: keyof State; value: any }
  | { type: "SET_INITIAL_VALUES"; payload: Partial<State> }
  | { type: "SET_ERRORS"; payload: Partial<State> }
  | { type: "SET_HAS_MISSING_FIELDS"; payload: boolean }
  | { type: "ADD_INSTRUCTION"; instruction: string }
  | { type: "REMOVE_INSTRUCTION"; index: number }
  | { type: "ADD_IMAGE"; payload: string } // New action type for adding images
  | { type: "RESET_IMAGES" }; // New action type for resetting images

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "SET_INITIAL_VALUES":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_HAS_MISSING_FIELDS":
      return {
        ...state,
        hasMissingFields: action.payload,
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload,
      };
    case "ADD_INSTRUCTION":
      if (state.userInstructions.length < 10) {
        return {
          ...state,
          userInstructions: [...state.userInstructions, action.instruction],
        };
      }
      return state;
    case "REMOVE_INSTRUCTION":
      return {
        ...state,
        userInstructions: state.userInstructions.filter(
          (_, index) => index !== action.index,
        ),
      };
    case "ADD_IMAGE":
      console.log("Adding image to state:", action.payload); // Debugging line
      return {
        ...state,
        images: [...state.images, action.payload],
      };
    case "RESET_IMAGES":
      return {
        ...state,
        images: [],
      };
    default:
      return state;
  }
};
