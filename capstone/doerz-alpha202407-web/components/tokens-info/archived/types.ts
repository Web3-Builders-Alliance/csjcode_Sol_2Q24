
export type CoinGeckoResponse = {
  [key: string]: {
    // The key is the token's CoinGecko ID
    usd: number;
  };
};

export type TokenInfo = {
  ath?: number;
  ath_change_percentage?: number;
  ath_date?: string; // Use string if keeping ISO format, or Date if converting to Date object
  atl?: number;
  atl_change_percentage?: number;
  atl_date?: string; // Use string if keeping ISO format, or Date if converting to Date object
  circulating_supply?: number;
  current_price?: number;
  fully_diluted_valuation?: number;
  high_24h?: number;
  id: string;
  image: string;
  last_updated?: string; // Use string if keeping ISO format, or Date if converting to Date object
  low_24h?: number;
  market_cap: number;
  market_cap_change_24h?: number;
  market_cap_change_percentage_24h?: number;
  market_cap_rank?: number;
  max_supply?: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_7d_in_currency: number;
  price_change_percentage_24h: number;
  price_change_percentage_24h_in_currency?: number;
  roi?: null; // Specify the type if this can be something other than null
  symbol: string;
  total_suppl?: number;
  total_volume?: number;
};