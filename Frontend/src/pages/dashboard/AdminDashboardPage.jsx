import { useEffect, useMemo, useState } from 'react';
import { metricsApi } from '../../api/metrics.api.js';
import { demoMetrics } from '../../api/demoMetrics.js';
import MetricCard from '../../components/dashboard/MetricCard.jsx';
import SalesTrendChart from '../../components/charts/SalesTrendChart.jsx';
import ChannelShareChart from '../../components/charts/ChannelShareChart.jsx';
import SlothLoader from '../../components/feedback/SlothLoader.jsx';
import { useAuth } from '../../context/AuthContext.jsx';
import { COPY } from '../../config/copy.es.js';
import { formatCompactCRC, formatCRC, formatPct } from '../../utils/formatters.js';

const ACCENTS = ['#7A9E7E', '#6F95AE', '#C99A3F', '#9288B8'];

export default function AdminDashboardPage() {
  const { user } = useAuth();
  const [data, setData] = useState(null);

  useEffect(() => {
    let alive = true;
    Promise.all([metricsApi.summary(), metricsApi.trend(), metricsApi.channelShare()])
      .then(([summary, trend, channelShare]) => { if (alive) setData({ summary, trend, channelShare }); })
      .catch(() => {});
    return () => { alive = false; };
  }, []);

  const summary = data?.summary;
  const trend = data?.trend;
  const channelShare = data?.channelShare;
  const sparks = useMemo(() => {
    if (!trend || !summary) return { sales: [], ticket: [], product: [], margin: [] };
    return {
      sales: trend.map((item) => ({ v: item.ventas })),
      ticket: trend.map((item, index) => ({ v: summary.avgTicket * (0.9 + index * 0.02) })),
      product: trend.map((item) => ({ v: item.ventas * (summary.topProduct.share / 100) })),
      margin: trend.map((item) => ({ v: item.margen }))
    };
  }, [trend, summary]);

  if (!data) return <SlothLoader text={COPY.loading} full />;
  const isDemo = summary.demo || trend.demo || channelShare.demo;
  const activity = isDemo ? demoMetrics.activity : [];

  return (
    <div className="grain">
      <div className="dash-hero-bg" aria-hidden="true" />

      <header className="panel-head">
        <div>
          <p className="panel-head__eyebrow">Panel administrativo</p>
          <h1>Buenos días, <em>{user?.fullName?.split(' ')[0] || 'administrador'}</em></h1>
          <p className="panel-head__sub">
            Tu operación va en buen ritmo. Estas son las señales más importantes de hoy.
          </p>
        </div>
        <div className="chips" aria-label="Agentes activos">
          <span className="chip">Breidy activo</span>
          <span className="chip">WF-02 en horario</span>
          <span className="chip">8 agentes listos</span>
        </div>
      </header>
      {isDemo && <div className="chip" role="status">Datos de muestra</div>}

      {/* 4 métricas clave con revelado escalonado y sparklines */}
      <section className="kpi-grid" aria-label="Métricas principales">
        <MetricCard index={0} accent={ACCENTS[0]} label="Ventas del mes"
          value={formatCompactCRC(summary.totalSales)} delta={summary.deltas.totalSales} deltaLabel="vs mes pasado"
          spark={sparks.sales} />
        <MetricCard index={1} accent={ACCENTS[1]} label="Ticket promedio"
          value={formatCRC(summary.avgTicket)} delta={summary.deltas.avgTicket} deltaLabel="vs mes pasado"
          spark={sparks.ticket} />
        <MetricCard index={2} accent={ACCENTS[2]} label="Producto líder"
          value={summary.topProduct.name} delta={summary.deltas.topProduct} deltaLabel={`${formatPct(summary.topProduct.share)} de ventas`}
          spark={sparks.product} />
        <MetricCard index={3} accent={ACCENTS[3]} label="Margen bruto"
          value={formatPct(summary.grossMargin)} delta={summary.deltas.grossMargin} deltaLabel="vs mes pasado"
          spark={sparks.margin} />
      </section>

      {/* Tendencia + canales */}
      <section className="panel-grid">
        <article className="glass" style={{ animationDelay: '380ms' }}>
          <h3>Evolución de ventas</h3>
          <p className="sub">Últimos seis meses, en colones</p>
          <SalesTrendChart data={trend} />
        </article>
        <article className="glass" style={{ animationDelay: '470ms' }}>
          <h3>Participación por canal</h3>
          <p className="sub">Distribución de ventas del mes</p>
          <ChannelShareChart data={channelShare} />
        </article>
      </section>

      {/* Actividad reciente */}
      <section className="panel-row">
        <article className="glass" style={{ animationDelay: '560ms' }}>
          <h3>Actividad reciente</h3>
          <p className="sub">Lo último que ocurrió en tu espacio</p>
          <div className="feed">
            {activity.map((a, i) => (
              <div className="feed__item" key={i}>
                <span className="feed__time">{a.time}</span>
                <span>{a.text}</span>
              </div>
            ))}
          </div>
        </article>
        <article className="glass" style={{ animationDelay: '650ms' }}>
          <h3>Estado del sistema</h3>
          <p className="sub">Servicios e integraciones</p>
          <div className="feed">
            <div className="feed__item"><span className="feed__time">API</span><span>Operando con normalidad</span></div>
            <div className="feed__item"><span className="feed__time">IA</span><span>Groq conectado; respaldo determinista listo</span></div>
            <div className="feed__item"><span className="feed__time">BCCR</span><span>Último tipo de cambio guardado hoy 06:00</span></div>
            <div className="feed__item"><span className="feed__time">n8n</span><span>3 flujos configurados</span></div>
          </div>
        </article>
      </section>
    </div>
  );
}