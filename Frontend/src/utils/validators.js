/**
 * @module src/utils/validators
 * @responsibility Validación cliente serena.
 * @requirements RNF-04
 */
export const validators = {
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  password: (value) => typeof value === 'string' && value.length >= 8 && /[A-Za-z]/.test(value) && /\d/.test(value),
  required: (value) => value !== null && value !== undefined && String(value).trim().length > 0,
  csvFile: (file) => Boolean(file && file.name?.toLowerCase().endsWith('.csv') && file.size <= 5 * 1024 * 1024),
  cedulaCR: (value) => /^\d{9}$/.test(value) || /^\d{10}$/.test(value) || /^\d{12}$/.test(value),
  dateRange: (start, end) => !start || !end || new Date(start) <= new Date(end)
};
