/**
 * @module src/api/demoMetrics
 * @responsibility Datos de muestra coherentes con la PYME del seed (cafetería
 *   costarricense con estacionalidad oct–nov–dic).
 * @requirements RF-08
 */
const MONTHS = ['Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov'];
const rand = (min, max) => Math.round(min + Math.random() * (max - min));

export const demoMetrics = {
  summary: {
    totalSales: 48600000,
    avgTicket: 9350,
    topProduct: { name: 'Café torrefacto 500 g', share: 34.2 },
    grossMargin: 41.8,
    deltas: { totalSales: 12.4, avgTicket: 3.1, topProduct: 1.2, grossMargin: -0.8 }
  },
  trend: MONTHS.map((m, i) => ({
    month: m,
    ventas: [5800, 6100, 6600, 7200, 8900, 9400][i] * 1000,
    margen: [38, 39, 40, 41, 43, 41.8][i]
  })),
  channelShare: [
    { name: 'Tienda física', value: 44, color: '#7A9E7E' },
    { name: 'Tienda en línea', value: 27, color: '#6F95AE' },
    { name: 'Por mayor', value: 19, color: '#C99A3F' },
    { name: 'Ferias', value: 10, color: '#9288B8' }
  ],
  activity: [
    { time: '09:42', text: 'Breidy respondió 3 consultas sobre el mes pasado' },
    { time: '08:15', text: 'Carga CSV confirmada: 2.140 ventas de tienda en línea' },
    { time: 'Ayer', text: 'WF-02 guardó el tipo de cambio: ₡512,35 / ₡519,87' },
    { time: 'Ayer', text: 'Reporte mensual generado con página de evidencia' }
  ]
};