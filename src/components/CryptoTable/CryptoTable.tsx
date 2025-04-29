// src/components/CryptoTable/CryptoTable.tsx
import React from 'react';
import styles from './CryptoTable.module.css';
import {
  formatCurrency,
  formatPercentage,
  formatAbbreviated,
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
        {data.map((c, i) => (
          <tr key={c.id}>
            <td>{i + 1}</td>
            <td>
              <span className={styles.name}>{c.name}</span>{' '}
              <span className={styles.symbol}>{c.symbol}</span>
            </td>
            <td>{formatCurrency(c.current_price)}</td>
            <td>{formatAbbreviated(c.market_cap)}</td>
            <td>{formatAbbreviated(c.total_volume)}</td>
            <td>{formatAbbreviated(c.circulating_supply)}</td>
            <td
              className={
                c.price_change_percentage_24h >= 0
                  ? styles.up
                  : styles.down
              }
            >
              {formatPercentage(c.price_change_percentage_24h)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
