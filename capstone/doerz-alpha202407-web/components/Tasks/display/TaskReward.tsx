import React from "react";

type TaskRewardProps = {
  rewardSize: string;
};

const TaskReward = ({ rewardSize }: TaskRewardProps) => {
  return (
    <div>
      {" "}
      <div className="text-lg font-bold">Reward</div>
      <div className="flex flex-row">
        <div className="">1,000 DOERZ</div>
        <div className="ml-2">
          / {`${rewardSize[0].toUpperCase() + rewardSize.slice(1)}`}
        </div>
      </div>
    </div>
  );
};

export default TaskReward;
