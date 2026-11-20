/**
 * @module src/config/env
 * @responsibility Variables de entorno del frontend con valor por defecto seguro.
 * @requirements RNF-08
 */
const env = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1'
};

export default env;