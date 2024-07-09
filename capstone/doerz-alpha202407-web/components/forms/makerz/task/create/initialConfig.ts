import { State } from "@/components/forms/makerz/task/create/reducerMakerzTaskFor";

export const OWNER_USER = "csjcodetest";
export const OWNER_GROUP = "doerzalpha";
export const OWNER_ADMIN = "doerzalpha";
export const OWNER_ORG = "doerzalpha";
export const FUNDING_POOL = [
  {
    id: "doerzfunding",
    label: "doerzfunding",
  },
];

export const getInitialValues = (state: State) => {
  return {
    draft: true,
    taskType: "ownership",
    taskIdNameShort: state.taskIdNameShort,
    ownerGroup: OWNER_GROUP,
    ownerAdmin: OWNER_ADMIN,
  };
};
