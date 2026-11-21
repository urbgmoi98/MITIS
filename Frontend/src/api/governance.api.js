/**
 * @module src/api/governance.api
 * @responsibility Contrato HTTP de términos, consentimientos y baja.
 * @requirements RF-19, RF-20, RF-21
 */
import httpClient from './httpClient.js';

export const governanceApi = {
  privacy: () => httpClient.get('/legal/privacy').then((value) => value.data || value),
  terms: () => httpClient.get('/legal/terms').then((value) => value.data || value),
  acceptTerms: (payload) => httpClient.post('/governance/accept-terms', payload).then((value) => value.data || value),
  consents: {
    get: () => httpClient.get('/governance/consents').then((value) => value.data || value),
    put: (payload) => httpClient.put('/governance/consents', payload).then((value) => value.data || value)
  },
  deletionRequest: (payload) => httpClient.post('/governance/deletion-request', payload).then((value) => value.data || value),
  deletionConfirm: (payload) => httpClient.post('/governance/deletion-request/confirm', payload).then((value) => value.data || value)
};
