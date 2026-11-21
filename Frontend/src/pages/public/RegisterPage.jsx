/**
 * @module src/pages/public/RegisterPage
 * @responsibility Registro público con aceptación de términos.
 * @requirements RF-01, RF-19
 */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authApi } from '../../api/auth.api.js';
import Input from '../../components/ui/Input.jsx';
import Button from '../../components/ui/Button.jsx';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ organization: '', fullName: '', email: '', password: '', terms: false });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  async function submit(event) {
    event.preventDefault();
    if (!form.terms) return setError('Acepta los términos para continuar.');
    setBusy(true);
    try { await authApi.register(form); navigate('/ingresar', { replace: true }); }
    catch (caught) { setError(caught.message); }
    finally { setBusy(false); }
  }
  return <form className="auth-card" onSubmit={submit}><h1>Crear cuenta</h1>{error && <p className="hint-error" role="alert">{error}</p>}<Input id="organization" label="Organización" value={form.organization} onChange={(event) => setForm({ ...form, organization: event.target.value })} /><Input id="fullName" label="Nombre" value={form.fullName} onChange={(event) => setForm({ ...form, fullName: event.target.value })} /><Input id="email" label="Correo" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /><Input id="password" label="Contraseña" type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} /><label className="field"><span><input type="checkbox" checked={form.terms} onChange={(event) => setForm({ ...form, terms: event.target.checked })} /> Acepto los <Link to="/terminos">términos</Link></span></label><Button loading={busy} type="submit" style={{ width: '100%' }}>Crear cuenta</Button></form>;
}
