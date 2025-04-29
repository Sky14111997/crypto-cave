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
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <div className={styles.footer}>
        <span className={styles.price}>{formatCurrency(price)}</span>
        <span
          className={
            change >= 0 ? styles.changePositive : styles.changeNegative
          }
        >
          {formatPercentage(change)}
        </span>
      </div>
    </div>
  );
}
