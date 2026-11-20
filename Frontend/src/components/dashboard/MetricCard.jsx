/**
 * @module src/components/dashboard/MetricCard
 * @responsibility Tarjeta KPI: valor grande, delta sereno y minigráfico sparkline.
 * @requirements RF-08, RNF-06
 */
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

export default function MetricCard({ index, label, value, delta, deltaLabel, accent, spark }) {
  const negative = typeof delta === 'number' && delta < 0;
  return (
    <article className="kpi" style={{ '--i': index, '--kpi-accent': accent }}>
      <p className="kpi__label">{label}</p>
      <p className="kpi__value tabular">{value}</p>
      {typeof delta === 'number' && (
        <span className={`kpi__delta${negative ? ' negative' : ''}`}>
          {negative ? '↓' : '↑'} {Math.abs(delta).toFixed(1).replace('.', ',')} %
          {deltaLabel ? ` ${deltaLabel}` : ''}
        </span>
      )}
      {spark && spark.length > 1 && (
        <div className="kpi__spark" aria-hidden="true">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={spark} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
              <defs>
                <linearGradient id={`spark-${index}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={accent} stopOpacity={0.45} />
                  <stop offset="100%" stopColor={accent} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="v" stroke={accent} strokeWidth={1.8}
                fill={`url(#spark-${index})`} isAnimationActive />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </article>
  );
}