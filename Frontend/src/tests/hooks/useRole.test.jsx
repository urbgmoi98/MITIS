/** @module src/tests/hooks/useRole @responsibility Verifica visibilidad por rol. @requirements RF-04, RNF-02 */
import { renderHook } from '@testing-library/react';
import useRole from '../../hooks/useRole.js';
import { AuthContext } from '../../context/AuthContext.jsx';
import React from 'react';
import { test, expect } from 'vitest';

test('can() aplica permisos por acción y rol', () => {
  const wrapper = ({ children }) => React.createElement(AuthContext.Provider, { value: { role: 'admin' } }, children);
  const { result } = renderHook(() => useRole(), { wrapper });
  expect(result.current.can('manageUsers')).toBe(true);
  expect(result.current.isAuditor).toBe(false);
});
