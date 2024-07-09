export interface BaseToken {
  address: string;
  name: string;
  symbol: string;
}

export interface Info {
  imageUrl: string;
  websites: {
    label: string;
    url: string;
  }[];
  socials: {
    type: string;
    url: string;
  }[];
}

export interface ExtractedData {
  chainId: string;
  dexId: string;
  url: string;
  baseToken: BaseToken;
  priceUsd: string;
  volumeH24: number;
  info: Info;
}
