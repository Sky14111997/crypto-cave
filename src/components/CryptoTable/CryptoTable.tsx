// src/components/CryptoTable/CryptoTable.tsx
import React from 'react';
import styles from './CryptoTable.module.css';
import { formatNumber, formatPercent } from '../../utils/format';
import { MarketData } from '../../types';

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
              {c.name} <span className={styles.symbol}>{c.symbol.toUpperCase()}</span>
            </td>
            <td>{formatNumber(c.current_price)}</td>
            <td>{formatNumber(c.market_cap)}</td>
            <td>{formatNumber(c.total_volume)}</td>
            <td>{formatNumber(c.circulating_supply)}</td>
            <td className={
                c.price_change_percentage_24h >= 0
                  ? styles.positive
                  : styles.negative
              }>
              {formatPercent(c.price_change_percentage_24h)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
