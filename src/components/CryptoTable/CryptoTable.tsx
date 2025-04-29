// src/components/CryptoTable/CryptoTable.tsx
import React from 'react';
import styles from './CryptoTable.module.css';
import { formatCurrency, formatNumber, formatPercentage } from '../../utils/format';
import { CoinMarket } from '../../types';

interface CryptoTableProps {
  data: CoinMarket[];
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
              {c.name}{' '}
              <span className={styles.symbol}>{c.symbol.toUpperCase()}</span>
            </td>
            <td>{formatCurrency(c.current_price)}</td>
            <td>{formatCurrency(c.market_cap)}</td>
            <td>{formatCurrency(c.total_volume)}</td>
            <td>{formatNumber(c.circulating_supply)}</td>
            <td className={c.price_change_percentage_24h >= 0 ? styles.positive : styles.negative}>
              {formatPercentage(c.price_change_percentage_24h)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
