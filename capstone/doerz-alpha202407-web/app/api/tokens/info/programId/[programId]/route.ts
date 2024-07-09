import { NextRequest, NextResponse } from 'next/server';
import { fetchWithRetry } from '../../../../../../utils/fetchWithRetry';
import { FetchOptions } from '../../../../types';


export interface TokenPair {
  chainId: string;
  dexId: string;
  url: string;
  pairAddress: string;
  labels: string[];
  baseToken: {
    address: string;
    name: string;
    symbol: string;
  };
  quoteToken: {
    address: string;
    name: string;
    symbol: string;
  };
  priceNative: string;
  priceUsd: string;
  txns: {
    m5: {
      buys: number;
      sells: number;
    };
    h1: {
      buys: number;
      sells: number;
    };
    h6: {
      buys: number;
      sells: number;
    };
    h24: {
      buys: number;
      sells: number;
    };
  };
  volume: {
    h24: number;
    h6: number;
    h1: number;
    m5: number;
  };
  priceChange: {
    m5: number;
    h1: number;
    h6: number;
    h24: number;
  };
  liquidity: {
    usd: number;
    base: number;
    quote: number;
  };
  fdv: number;
  pairCreatedAt: number;
  info: {
    imageUrl: string;
    websites: {
      label: string;
      url: string;
    }[];
    socials: {
      type: string;
      url: string;
    }[];
  };
}

export interface TokenInfoResponse {
  schemaVersion: string;
  pairs: TokenPair[];
}

// Dummy data for demonstration
const dummyData: TokenInfoResponse = {
  schemaVersion: "1.0.0",
  pairs: [
    {
      chainId: "solana",
      dexId: "orca",
      url: "https://dexscreener.com/solana/3ne4mwqdyuniyryzc9tra3fcfufderghh97vnpbjicr1",
      pairAddress: "3ne4mWqdYuNiYrYZC9TrA3FcfuFdErghH97vNPbjicr1",
      labels: ["wp"],
      baseToken: {
        address: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
        name: "Bonk",
        symbol: "Bonk",
      },
      quoteToken: {
        address: "So11111111111111111111111111111111111111112",
        name: "Wrapped SOL",
        symbol: "SOL",
      },
      priceNative: "0.0000001606",
      priceUsd: "0.00002360",
      txns: {
        m5: { buys: 0, sells: 0 },
        h1: { buys: 13, sells: 71 },
        h6: { buys: 306, sells: 364 },
        h24: { buys: 1160, sells: 1485 },
      },
      volume: {
        h24: 780657.7,
        h6: 195195.25,
        h1: 24469.51,
        m5: 0,
      },
      priceChange: {
        m5: 0,
        h1: -2.21,
        h6: -2.17,
        h24: 6.59,
      },
      liquidity: {
        usd: 3121999.2,
        base: 70726744494,
        quote: 9882.3899,
      },
      fdv: 1564980407,
      pairCreatedAt: 1671900044000,
      info: {
        imageUrl: "https://dd.dexscreener.com/ds-data/tokens/solana/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263.png",
        websites: [
          { label: "Website", url: "https://www.bonkcoin.com" },
        ],
        socials: [
          { type: "telegram", url: "https://t.me/Official_Bonk_Inu" },
          { type: "discord", url: "https://discord.gg/qaQa6M6mN2" },
          { type: "twitter", url: "https://twitter.com/bonk_inu" },
        ],
      },
    },
  ],
};

export async function GET(req: NextRequest, { params }: { params: { programId: string } }) {
  try {
    const { programId } = params;

    const options: FetchOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const externalApiResponse = await fetchWithRetry(
      `http://localhost:3000/api/tokens-info/programId/${programId}`,
      options,
      3, // Number of retries
      500 // Initial backoff time in ms
    );

    if (!externalApiResponse.ok) {
      throw new Error(`HTTP error! Status: ${externalApiResponse.status}`);
    }

    const data = await externalApiResponse.json();

    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ error: error.message || 'Something went wrong' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
