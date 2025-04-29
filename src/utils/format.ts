// src/utils/format.ts

/**
 * সংখ্যা কে কমা এবং দুই দশমিক সহ ফরম্যাট করে
 * @param value ফরম্যাট করার সংখ্যাটি
 * @returns উদাহরণস্বরূপ: "1,234.56"
 */
export function formatNumber(value: number): string {
  return value.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * সংখ্যাকে USD কারেন্সি স্টাইলে রূপান্তর করে
 * @param value কারেন্সি মান (যেমন 1234.5)
 * @returns উদাহরণস্বরূপ: "$1,234.50"
 */
export function formatCurrency(value: number): string {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

/**
 * সংখ্যাকে পার্সেন্টেজ স্টাইলে রূপান্তর করে
 * @param value পার্সেন্টেজ মান (যেমন 5.23)
 * @returns উদাহরণস্বরূপ: "+5.23%" বা "-1.50%"
 */
export function formatPercentage(value: number): string {
  const sign = value > 0 ? '+' : '';
  return sign + value.toFixed(2) + '%';
}
