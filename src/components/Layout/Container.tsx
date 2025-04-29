import React from 'react';
import styles from './CoinCard.module.css';
import { formatNumber, formatPercent } from '../../utils/format';
import { MarketData } from '../../types';

export default function CoinCard({
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
}: MarketData) {
  const changeClass = price_change_percentage_24h >= 0
    ? styles.changePos
    : styles.changeNeg;

  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <small>{symbol.toUpperCase()}</small>
      <div className={styles.price}>${formatNumber(current_price)}</div>
      <div className={changeClass}>
        {formatPercent(price_change_percentage_24h)}
      </div>
    </div>
  );
}
