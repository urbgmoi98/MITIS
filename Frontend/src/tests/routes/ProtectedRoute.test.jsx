/** @module src/tests/routes/ProtectedRoute @responsibility Prueba protección básica. @requirements RF-02 */
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../../routes/ProtectedRoute.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';
import { test, expect } from 'vitest';

test('sin sesión redirige a ingresar', () => {
  render(<AuthContext.Provider value={{ isAuthenticated:false, booting:false }}><MemoryRouter initialEntries={['/panel']}><Routes><Route element={<ProtectedRoute />}><Route path="/panel" element={<p>Privado</p>} /></Route><Route path="/ingresar" element={<p>Ingreso</p>} /></Routes></MemoryRouter></AuthContext.Provider>);
  expect(screen.getByText('Ingreso')).toBeInTheDocument();
});
