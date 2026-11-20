/**
 * @module src/components/charts/ChannelShareChart
 * @responsibility Participación por canal (dona serena con acentos MITIS).
 * @requirements RF-08
 */
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

export default function ChannelShareChart({ data }) {
  const total = data.reduce((acc, d) => acc + d.value, 0);
  return (
    <div>
      <ResponsiveContainer width="100%" height={210}>
        <PieChart>
          <Tooltip formatter={(v) => `${v} %`} />
          <Pie data={data} dataKey="value" nameKey="name" innerRadius="62%" outerRadius="92%"
            paddingAngle={3} strokeWidth={0} isAnimationActive animationDuration={900}>
            {data.map((d) => <Cell key={d.name} fill={d.color} />)}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="legend">
        {data.map((d) => (
          <div className="legend__row" key={d.name}>
            <span className="legend__dot" style={{ background: d.color }} />
            {d.name}
            <span className="legend__pct tabular">{((d.value / total) * 100).toFixed(0)} %</span>
          </div>
        ))}
      </div>
    </div>
  );
}