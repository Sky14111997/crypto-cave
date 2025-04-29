// src/utils/format.ts

/**
 * সংখ্যাকে লোকেলকোনফরমেটেড স্ট্রিং-এ কনভার্ট করে
 * @param value ফরম্যাট করার জন্য সংখ্যা
 * @returns লোকেল স্পেসিফিক থাউজ্যান্ড সেপারেটরের সাথে স্ট্রিং
 */
export function formatNumber(value: number): string {
  return value.toLocaleString();
}

/**
 * পার্সেন্টেজ ভ্যালুকে দুই দশমিক ও সাইন সহ ফরম্যাট করে
 * @param value পার্সেন্টেজ ভ্যালু
 * @returns উদাঃ "+1.23%"
 */
export function formatPercent(value: number): string {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
}

/**
 * সংখ্যাকে USD কারেন্সি ফরম্যাটে কনভার্ট করে
 * @param value কারেন্সি ভ্যালু
 * @returns উদাঃ "$1,234.00"
 */
export function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * পার্সেন্টেজ ভ্যালুকে দুই দশমিক সহ (সাইন ছাড়া) ফরম্যাট করে
 * @param value পার্সেন্টেজ ভ্যালু
 * @returns উদাঃ "1.23%"
 */
export function formatPercentage(value: number): string {
  return `${value.toFixed(2)}%`;
}
