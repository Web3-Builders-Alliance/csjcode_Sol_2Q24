import { Input } from "@/components/ui/input";
import React, { ChangeEvent } from "react";
import { handleFormChange } from "./handleFormChange";
import { State } from "./reducerMakerzTaskFor";
import FormLabel from "./FormLabel";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { FUNDING_POOL, OWNER_ORG } from "./initialConfig";
import { Button } from "@/components/ui/button";

type MakerzTaskCreateFundingProps = {
  state: State;
  // setValue: any;
  dispatch: any;
  handleFormChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void;
  errors: any;
  register: any;
};

const MakerzTaskCreateFunding = ({
  state,
  dispatch,
  handleFormChange,
  errors,
  register,
}: MakerzTaskCreateFundingProps) => {
  return (
    <div>
      <div className="flex flex-col items-center">
        {/* <div className="mt-4">
          <hr className="my-2 h-[1px] border-t-0 bg-neutral-200 dark:bg-white/10" />
          <p className="text-center font-bold">Reward to Complete Task</p>
          <hr className="my-2 h-[1px] border-t-0 bg-neutral-200 dark:bg-white/10" />
        </div> */}

        <div className="flex flex-col my-4 flex flex-col">
          <FormLabel
            labelTitle="DOERZ Reward"
            required={true}
            ready={!!state.rewardInDOERZ}
          />
          <div className="flex flex-col items-center justify-center">
            <Input
              className="my-2 w-20"
              defaultValue="100"
              type="number"
              {...register("rewardInDOERZ", {
                valueAsNumber: true,
                required: "Reward in DOERZ is required",
                onChange: (
                  e: React.ChangeEvent<
                    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
                  >,
                ) => handleFormChange(e),
              })}
            />{" "}
            {/* <span className="mt-.5 text-sm">DOERZ</span> */}
          </div>
          {errors.rewardInDOERZ && (
            <p>{errors.rewardInDOERZ.message as string}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        {/* <hr className="my-2 h-[1px] border-t-0 bg-neutral-200 dark:bg-white/10" />
        <p className="text-center font-bold">Funding Pools</p>
        <hr className="my-2 h-[1px] border-t-0 bg-neutral-200 dark:bg-white/10" /> */}
        <div className="">
          <div className="flex flex-col my-4 mr-2">
            <label className="mb-1 text-sm text-zinc-600 dark:text-zinc-400">
              Select Funding Pool
            </label>
            <Select
              defaultValue={FUNDING_POOL[0].id}
              value={state.fundingPool}
              {...register("fundingPool")}
              onValueChange={(value) =>
                handleFormChange({
                  target: { name: "fundingPool", value },
                } as any)
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select fundingPool" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {FUNDING_POOL.map((fundingPool) => (
                    <SelectItem key={fundingPool.id} value={fundingPool.id}>
                      {fundingPool.label}
                    </SelectItem>
                  ))}
                  <SelectItem
                    key={"fundingPoolCreate"}
                    value={"fundingPoolCreate"}
                  >
                    Create New
                  </SelectItem>
                  {/* <SelectItem value={OWNER_ORG}>{OWNER_ORG}</SelectItem>
                  <SelectItem value="doerzsitepromos">
                    Doerz.fun Site Rewards
                  </SelectItem>
                   */}
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.ownerGroup && <p>{errors.ownerGroup.message as string}</p>}
          </div>
          {state.fundingPool === "fundingPoolCreate" && (
            <div className="">Create Pool</div>
          )}
          {/* <div className="items-content flex flex-row justify-center">
            <Button
              className="my-2 border-blue-500 "
              variant="outline"
              // type="submit"
            >
              Create new Funding Pool
            </Button>
          </div> */}
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default MakerzTaskCreateFunding;
