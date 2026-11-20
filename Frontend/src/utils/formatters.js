/**
 * @module src/utils/formatters
 * @responsibility Formato es-CR: colones, dólares, fechas y porcentajes.
 * @requirements RF-08
 */
const crc = new Intl.NumberFormat('es-CR', {
  style: 'currency', currency: 'CRC', maximumFractionDigits: 0
});
const usd = new Intl.NumberFormat('es-CR', {
  style: 'currency', currency: 'USD', maximumFractionDigits: 2
});
const dateFmt = new Intl.DateTimeFormat('es-CR', { day: 'numeric', month: 'short', year: 'numeric' });
const numFmt = new Intl.NumberFormat('es-CR');

export const formatCRC = (v) => crc.format(Number(v) || 0);
export const formatUSD = (v) => usd.format(Number(v) || 0);
export const formatNumber = (v) => numFmt.format(Number(v) || 0);
export const formatDate = (d) => (d ? dateFmt.format(new Date(d)) : '—');
export const formatPct = (v) => `${(Number(v) || 0).toFixed(1)} %`;

/** Formato compacto para KPIs: ₡1,2 M / ₡845 K. */
export const formatCompactCRC = (v) => {
  const n = Number(v) || 0;
  if (Math.abs(n) >= 1_000_000) return `₡${(n / 1_000_000).toFixed(1).replace('.', ',')} M`;
  if (Math.abs(n) >= 1_000) return `₡${Math.round(n / 1_000)} K`;
  return crc.format(n);
};