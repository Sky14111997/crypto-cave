// src/utils/format.ts

/**
 * Number কে US ডলার হিসেবে ফরম্যাট করবে, e.g. 1234.5 → "$1,234.50"
 */
export function formatCurrency(value: number | string | undefined): string {
  if (value == null || isNaN(Number(value))) return '–';
  const num = typeof value === 'string' ? parseFloat(value) : value;
  return num.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
}

/**
 * Percentage ফরম্যাট, e.g. 5.234 → "5.23%"
 */
export function formatPercentage(value: number | string | undefined): string {
  if (value == null || isNaN(Number(value))) return '–';
  const num = typeof value === 'string' ? parseFloat(value) : value;
  return `${num.toFixed(2)}%`;
}
