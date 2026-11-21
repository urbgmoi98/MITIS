/**
 * @module src/utils/constants
 * @responsibility Constantes compartidas de rutas, agentes y cargas.
 * @requirements RNF-08
 */
export const AGENT_CODES = Object.freeze([
  'invoice-reader', 'margin-analyst', 'report-narrator', 'document-chat',
  'support-assistant', 'compliance-assistant', 'csv-mapper', 'serene-pulse'
]);
export const INTENTS = Object.freeze([
  'Ventas totales', 'Margen por producto', 'Evolución temporal',
  'Participación por canal', 'Comparación entre períodos'
]);
export const AGENT_INPUT_SCHEMA = Object.freeze({
  'invoice-reader': ['archivo'],
  'margin-analyst': ['periodo'],
  'report-narrator': ['periodo'],
  'document-chat': ['pregunta', 'archivo'],
  'support-assistant': ['pregunta'],
  'compliance-assistant': ['pregunta'],
  'csv-mapper': ['encabezados', 'muestra'],
  'serene-pulse': ['periodo']
});
export const UPLOAD_MAX_MB = 5;
export const PAGE_SIZE = 20;
