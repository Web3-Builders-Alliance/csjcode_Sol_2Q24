export const getRewardSize = (rewardInDOERZ: number) => {
  if (rewardInDOERZ < 500) return "small";
  if (rewardInDOERZ >= 501 && rewardInDOERZ <= 2000) return "medium";
  if (rewardInDOERZ >= 2001 && rewardInDOERZ <= 5001) return "large";
  return "very high";
};