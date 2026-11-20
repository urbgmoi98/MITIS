/**
 * @module src/components/charts/SalesTrendChart
 * @responsibility Tendencia mensual de ventas (área con gradiente).
 * @requirements RF-08
 */
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatCompactCRC } from '../../utils/formatters.js';

export default function SalesTrendChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
        <defs>
          <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7A9E7E" stopOpacity={0.5} />
            <stop offset="100%" stopColor="#7A9E7E" stopOpacity={0.04} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 6" stroke="rgba(45,74,58,0.10)" vertical={false} />
        <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#5b6a61' }} axisLine={false} tickLine={false} dy={6} />
        <YAxis tickFormatter={formatCompactCRC} tick={{ fontSize: 11, fill: '#8a938c' }}
          axisLine={false} tickLine={false} width={64} />
        <Tooltip formatter={(v) => [formatCompactCRC(v), 'Ventas']} cursor={{ stroke: '#7A9E7E', strokeDasharray: '4 4' }} />
        <Area type="monotone" dataKey="ventas" stroke="#2D4A3A" strokeWidth={2.2}
          fill="url(#trendFill)" isAnimationActive animationDuration={900} />
      </AreaChart>
    </ResponsiveContainer>
  );
}