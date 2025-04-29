// src/types.ts

/**
 * CoinGecko থেকে পাওয়া মার্কেট ডেটার স্ট্রাকচার
 */
export interface CoinMarket {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  circulating_supply: number;
  price_change_percentage_24h: number;
}
