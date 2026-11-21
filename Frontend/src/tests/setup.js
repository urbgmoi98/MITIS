/**
 * @module src/tests/setup
 * @responsibility Configuración global de Vitest y Testing Library.
 * @requirements RNF-06
 */
import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

afterEach(() => cleanup());

globalThis.ResizeObserver = class ResizeObserver { observe() {} unobserve() {} disconnect() {} };
Object.defineProperty(window, 'matchMedia', { writable: true, value: (query) => ({
  matches: false, media: query, onchange: null,
  addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {}, dispatchEvent() { return false; }
}) });
