// src/utils/format.ts

/**
 * সাধারণ সংখ্যাকে লোকেল-স্ট্রিং ফরম্যাটে রূপান্তর করে: 1234.5 → "1,234.50"
 */
export function formatNumber(value: number): string {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * USD কারেন্সি স্টাইল এ ফরম্যাট করে: 1234.5 → "$1,235"
 */
export function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

/**
 * শতাংশ মানকে + / - সহ দুই দশমিক এ রূপান্তর করে: 5.23 → "+5.23%", -1.5 → "-1.50%"
 */
export function formatPercentage(value: number): string {
  const sign = value > 0 ? '+' : '';
  return sign + value.toFixed(2) + '%';
}
