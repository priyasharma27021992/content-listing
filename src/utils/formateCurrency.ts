export type FormatCurrency = {
  locale: string;
  currency: string;
  value: number;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

export function formatCurrency({
  locale,
  currency,
  value,
  minimumFractionDigits,
  maximumFractionDigits,
}: FormatCurrency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits,
    maximumFractionDigits,
    currencyDisplay: 'narrowSymbol',
  }).format(value);
}
