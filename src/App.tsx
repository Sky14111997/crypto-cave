// src/App.tsx
import React from 'react';
import { useFetch } from './hooks/useFetch';
import CoinCard from './components/CoinCard/CoinCard';
import CryptoTable from './components/CryptoTable/CryptoTable';
import styles from './App.module.css';
import { CoinMarket } from './types';

export default function App() {
  // ৩ টি আলাদা এন্ডপয়েন্ট থেকে ডেটা নিয়ে আসছি
  const { data: trending } = useFetch<CoinMarket[]>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1'
  );
  const { data: newlyAdded } = useFetch<CoinMarket[]>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=3&page=2'
  );
  const { data: top5 } = useFetch<CoinMarket[]>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1'
  );

  return (
    <div className={styles.app}>
      <section className={styles.mainContent}>
        <h2>Trending Coins</h2>
        <div className={styles.cardGrid}>
          {trending?.map((c) => (
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

      <section className={styles.mainContent}>
        <h2>Newly Added</h2>
        <div className={styles.cardGrid}>
          {newlyAdded?.map((c) => (
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

      <section className={styles.mainContent}>
        <h2>Top Cryptocurrencies</h2>
        <CryptoTable data={top5 || []} />
      </section>
    </div>
  );
}
