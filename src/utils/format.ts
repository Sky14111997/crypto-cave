// src/utils/format.ts
/**
 * Format a number as USD currency, e.g. 1234.56 → "$1,234.56"
 */
export function formatCurrency(value: number): string {
  return value.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  });
}

/**
 * Format a raw percentage (e.g. -2.3456) → "-2.35%"
 * Automatically adds "+" for positive values.
 */
export function formatPercentage(value: number): string {
  const sign = value > 0 ? '+' : '';
  return sign + value.toFixed(2) + '%';
}
