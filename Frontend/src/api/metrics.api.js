/**
 * @module src/api/metrics.api
 * @responsibility Métricas del panel (RF-08), con datos demo únicamente explícitos.
 * @requirements RF-08
 */
import httpClient from './httpClient.js';
import { demoMetrics } from './demoMetrics.js';

function canUseDemo(error) {
  return import.meta.env.VITE_ENABLE_DEMO === 'true'
    && ![401, 403].includes(error.status)
    && (!error.status || error.status >= 500);
}

function withDemoMarker(value) {
  return { ...value, demo: true };
}

export const metricsApi = {
  async summary() {
    try { return (await httpClient.get('/metrics/summary')).data; }
    catch (error) { if (canUseDemo(error)) return withDemoMarker(demoMetrics.summary); throw error; }
  },
  async trend() {
    try { return (await httpClient.get('/metrics/trend')).data; }
    catch (error) { if (canUseDemo(error)) return withDemoMarker(demoMetrics.trend); throw error; }
  },
  async channelShare() {
    try { return (await httpClient.get('/metrics/channel-share')).data; }
    catch (error) { if (canUseDemo(error)) return withDemoMarker(demoMetrics.channelShare); throw error; }
  }
};