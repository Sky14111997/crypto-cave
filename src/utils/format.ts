// src/utils/format.ts

/**
 * সংখ্যাকে K/M/B/T আকারে সংক্ষিপ্ত করে।
 */
function abbreviate(value: number): string {
  if (value >= 1e12) return (value / 1e12).toFixed(1).replace(/\.0$/, '') + 'T';
  if (value >= 1e9)  return (value / 1e9).toFixed(1).replace(/\.0$/, '') + 'B';
  if (value >= 1e6)  return (value / 1e6).toFixed(1).replace(/\.0$/, '') + 'M';
  if (value >= 1e3)  return (value / 1e3).toFixed(1).replace(/\.0$/, '') + 'K';
  return value.toString();
}

/**
 * USD কারেন্সি ফরম্যাট করবে: "$1,234", ডিসেমিমাল সরিয়ে।
 */
export function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });
}

/**
 * শতাংশকে "+5.2%" বা "-0.3%" ফরম্যাট করবে।
 */
export function formatPercentage(value: number): string {
  const sign = value > 0 ? '+' : '';
  return sign + value.toFixed(1) + '%';
}

/**
 * বড় বড় সংখ্যা (market cap, volume, supply) সংক্ষিপ্ত আকারে দেখাবে।
 */
export function formatAbbreviated(value: number): string {
  return abbreviate(value);
}
