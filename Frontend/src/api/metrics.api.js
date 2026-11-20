/**
 * @module src/api/metrics.api
 * @responsibility Métricas del panel (RF-08). Si la API aún no responde,
 *   devuelve datos de muestra para no bloquear el diseño.
 * @requirements RF-08
 */
import httpClient from './httpClient.js';
import { demoMetrics } from './demoMetrics.js';

export const metricsApi = {
  async summary() {
    try { return (await httpClient.get('/metrics/summary')).data; }
    catch { return demoMetrics.summary; }
  },
  async trend() {
    try { return (await httpClient.get('/metrics/trend')).data; }
    catch { return demoMetrics.trend; }
  },
  async channelShare() {
    try { return (await httpClient.get('/metrics/channel-share')).data; }
    catch { return demoMetrics.channelShare; }
  }
};