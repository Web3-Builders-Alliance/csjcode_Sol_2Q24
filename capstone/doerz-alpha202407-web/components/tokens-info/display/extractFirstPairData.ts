import { TokenInfoResponse } from "@/app/api/tokens/info/programId/[programId]/route";
import { ExtractedData } from "./types";

export const extractFirstPairData = (data: TokenInfoResponse): ExtractedData | null => {
  if (!data.pairs || data.pairs.length === 0) {
    return null;
  }

  const firstPair = data.pairs[0];

  return {
    chainId: firstPair.chainId,
    dexId: firstPair.dexId,
    url: firstPair.url,
    baseToken: firstPair.baseToken,
    priceUsd: firstPair.priceUsd,
    volumeH24: firstPair.volume.h24,
    info: firstPair.info,
  };
};
