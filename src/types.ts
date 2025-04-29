// src/types.ts

/** 
 * CoinMarket API থেকে আসা প্রত্যেক আইটেমের ধরন 
 */
export interface MarketData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap_rank: number;
  market_cap: number;
  total_volume: number;
  circulating_supply: number;
  price_change_percentage_24h: number;
}
