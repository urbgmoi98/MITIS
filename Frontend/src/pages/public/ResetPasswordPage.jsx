/**
 * @module src/pages/public/ResetPasswordPage
 * @responsibility Restablecimiento mediante token.
 * @requirements RF-03
 */
import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { authApi } from '../../api/auth.api.js';
import Input from '../../components/ui/Input.jsx';
import Button from '../../components/ui/Button.jsx';

export default function ResetPasswordPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [error, setError] = useState('');
  async function submit(event) {
    event.preventDefault();
    if (password !== confirmation) return setError('Las contraseñas deben coincidir.');
    try { await authApi.resetPassword({ token: params.get('token'), password }); navigate('/ingresar'); }
    catch (caught) { setError(caught.message); }
  }
  return <form className="auth-card" onSubmit={submit}><h1>Nueva contraseña</h1>{error && <p className="hint-error" role="alert">{error}</p>}<Input id="password" label="Contraseña" type="password" value={password} onChange={(event) => setPassword(event.target.value)} /><Input id="confirmation" label="Confirmar contraseña" type="password" value={confirmation} onChange={(event) => setConfirmation(event.target.value)} /><Button type="submit">Restablecer</Button></form>;
}
