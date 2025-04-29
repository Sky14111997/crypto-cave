// src/components/CoinCard/CoinCard.tsx
import React from 'react';
import styles from './CoinCard.module.css';
import { formatNumber, formatPercent } from '../../utils/format';
import { MarketData } from '../../types';

interface CoinCardProps {
  data: MarketData;
}

export default function CoinCard({ data }: CoinCardProps) {
  const {
    name,
    symbol,
    current_price,
    price_change_percentage_24h
  } = data;

  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <p className={styles.price}>{formatNumber(current_price)}</p>
      <p className={
          price_change_percentage_24h >= 0
            ? styles.positive
            : styles.negative
        }>
        {formatPercent(price_change_percentage_24h)}
      </p>
    </div>
  );
}
