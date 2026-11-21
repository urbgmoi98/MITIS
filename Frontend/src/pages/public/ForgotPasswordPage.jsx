/**
 * @module src/pages/public/ForgotPasswordPage
 * @responsibility Solicitud de recuperación sin revelar existencia.
 * @requirements RF-03
 */
import { useState } from 'react';
import { authApi } from '../../api/auth.api.js';
import Input from '../../components/ui/Input.jsx';
import Button from '../../components/ui/Button.jsx';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  async function submit(event) { event.preventDefault(); try { await authApi.forgotPassword({ email }); } finally { setSent(true); } }
  if (sent) return <section className="auth-card"><h1>Solicitud recibida</h1><p>Si existe una cuenta asociada, recibirás las instrucciones con calma.</p></section>;
  return <form className="auth-card" onSubmit={submit}><h1>Recuperar contraseña</h1><Input id="email" label="Correo" type="email" value={email} onChange={(event) => setEmail(event.target.value)} /><Button type="submit">Enviar instrucciones</Button></form>;
}
