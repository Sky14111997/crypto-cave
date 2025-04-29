// src/components/CryptoTable/CryptoTable.tsx
import React from 'react';
import styles from './CryptoTable.module.css';
import {
  formatCurrency,
  formatNumber,
  formatPercentage,
} from '../../utils/format';

export interface MarketData {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  circulating_supply: number;
  price_change_percentage_24h: number;
}

interface CryptoTableProps {
  data: MarketData[];
}

export default function CryptoTable({ data }: CryptoTableProps) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>Volume</th>
          <th>Supply</th>
          <th>24h Change</th>
        </tr>
      </thead>
      <tbody>
        {data.map((coin, idx) => (
          <tr key={coin.id}>
            <td>{idx + 1}</td>
            <td>
              {coin.name}{' '}
              <span className={styles.symbol}>
                {coin.symbol.toUpperCase()}
              </span>
            </td>
            <td>{formatCurrency(coin.current_price)}</td>
            <td>{formatNumber(coin.market_cap)}</td>
            <td>{formatNumber(coin.total_volume)}</td>
            <td>{formatNumber(coin.circulating_supply)}</td>
            <td
              className={
                coin.price_change_percentage_24h >= 0
                  ? styles.changePositive
                  : styles.changeNegative
              }
            >
              {formatPercentage(coin.price_change_percentage_24h)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
