// src/App.tsx
import React from 'react';
import CoinCard from './components/CoinCard/CoinCard';
import CryptoTable from './components/CryptoTable/CryptoTable';
import { useFetch } from './hooks/useFetch';
import { MarketData } from './types';
import styles from './App.module.css';

export default function App() {
  // Trending Coins
  const { data: trending } = useFetch<MarketData[]>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=gecko_desc&per_page=3&page=1&sparkline=false'
  );

  // Newly Added Coins
  const { data: newlyAdded } = useFetch<MarketData[]>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=2&sparkline=false'
  );

  // Top 5 Cryptocurrencies
  const { data: top5 } = useFetch<MarketData[]>(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false'
  );

  return (
    <div className={styles.app}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1>CryptoCave – The Future</h1>
        <p>
          Track real-time cryptocurrency prices, market cap, and trading
          volume. Get detailed information about the most promising digital
          assets.
        </p>
      </section>

      {/* Trending */}
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

      {/* Newly Added */}
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

      {/* Top Table */}
      <section className={styles.mainContent}>
        <h2>Top Cryptocurrencies</h2>
        <CryptoTable data={top5 || []} />
      </section>
    </div>
  );
}
