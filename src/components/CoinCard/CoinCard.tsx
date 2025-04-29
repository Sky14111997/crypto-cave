// src/components/CoinCard/CoinCard.tsx
import React from 'react';
import styles from './CoinCard.module.css';
import { formatCurrency, formatPercentage } from '../../utils/format';

interface CoinCardProps {
  name: string;
  symbol: string;
  price: number;
  change: number;
}

export default function CoinCard({
  name,
  symbol,
  price,
  change,
}: CoinCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>
      <p className={styles.symbol}>{symbol}</p>
      <p className={styles.price}>{formatCurrency(price)}</p>
      <p
        className={`${styles.change} ${
          change >= 0 ? styles.up : styles.down
        }`}
      >
        {formatPercentage(change)}
      </p>
    </div>
  );
}
