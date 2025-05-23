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

export default function CoinCard({ name, symbol, price, change }: CoinCardProps) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <p className={styles.price}>{formatCurrency(price)}</p>
      <p className={change >= 0 ? styles.positive : styles.negative}>
        {formatPercentage(change)}
      </p>
    </div>
  );
}
