/** @module src/tests/routes/RoleRoute @responsibility Prueba autorización por rol. @requirements RF-04 */
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import RoleRoute from '../../routes/RoleRoute.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';
import { test, expect } from 'vitest';

test('rol no permitido redirige a prohibido', () => {
  render(<AuthContext.Provider value={{ role:'client' }}><MemoryRouter initialEntries={['/admin']}><Routes><Route element={<RoleRoute allow={['admin']} />}><Route path="/admin" element={<p>Admin</p>} /></Route><Route path="/prohibido" element={<p>Prohibido</p>} /></Routes></MemoryRouter></AuthContext.Provider>);
  expect(screen.getByText('Prohibido')).toBeInTheDocument();
});
