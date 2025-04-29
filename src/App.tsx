// src/App.tsx
import React from 'react';
import Container from './components/Layout/Container';
import CoinCard from './components/CoinCard/CoinCard';
import CryptoTable from './components/CryptoTable/CryptoTable';
import { useFetch } from './hooks/useFetch';
import { CryptoData } from './types';
import styles from './App.module.css';

export default function App() {
  const trending = useFetch<CryptoData[]>('/api/trending');
  const newlyAdded = useFetch<CryptoData[]>('/api/newly-added');
  const top5 = useFetch<CryptoData[]>('/api/top-5');

  return (
    <Container>
      <section className={styles.section}>
        <h2>Trending Coins</h2>
        <div className={styles.cardGrid}>
          {trending.data?.map(c => (
            <CoinCard
              key={c.id}
              name={c.name}
              symbol={c.symbol}
              price={c.current_price}
              change={c.price_change_percentage_24h}
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Newly Added</h2>
        <div className={styles.cardGrid}>
          {newlyAdded.data?.map(c => (
            <CoinCard
              key={c.id}
              name={c.name}
              symbol={c.symbol}
              price={c.current_price}
              change={c.price_change_percentage_24h}
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2>Top Cryptocurrencies</h2>
        {/* always pass an array */}
        <CryptoTable data={top5.data ?? []} />
      </section>
    </Container>
  );
}
