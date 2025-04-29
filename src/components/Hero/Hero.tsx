import React from 'react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>CryptoCave – The Future</h1>
      <p>
        Track real-time cryptocurrency prices, market cap, and trading volume.
        Get detailed information about the most promising digital assets.
      </p>
    </section>
  );
}
