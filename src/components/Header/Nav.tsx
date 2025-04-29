import React from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>CryptoCave</div>
      <ul className={styles.menu}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li className={styles.dropdown}>
          <a href="/cryptocurrency">
            Cryptocurrency <span className={styles.arrow}>▾</span>
          </a>
          <ul className={styles.dropMenu}>
            <li><a href="/cryptocurrency/top-200-coins">Top 200 Coins</a></li>
            <li><a href="/cryptocurrency/trending">Trending</a></li>
            <li><a href="/cryptocurrency/newly-added">Newly Added</a></li>
          </ul>
        </li>
        <li><a href="/listing-guide">Listing Guide</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
      <button className={styles.applyBtn}>Apply for Listing</button>
    </nav>
  );
}
