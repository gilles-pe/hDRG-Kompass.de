export const currencyFormatter = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR',
})

export const dateTimeFormatter = new Intl.DateTimeFormat('de-DE', {
  dateStyle: 'medium',
  timeStyle: 'short',
})

export function formatCurrency(value: number) {
  return currencyFormatter.format(value)
}
