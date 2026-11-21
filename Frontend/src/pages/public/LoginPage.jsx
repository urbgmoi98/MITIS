/**
 * @module src/pages/public/LoginPage
 * @responsibility Login sereno con validación de formulario y errores tranquilos.
 * @requirements RF-02, RNF-06
 */
import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { useToast } from '../../context/ToastContext.jsx';
import { COPY } from '../../config/copy.es.js';

export default function LoginPage() {
  const { login } = useAuth();
  const { notify } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const errs = {};
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Ingresa un correo válido.';
    if (!form.password) errs.password = 'Ingresa tu contraseña.';
    if (Object.keys(errs).length) return setErrors(errs);

    setBusy(true);
    try {
      await login(form.email, form.password);
      notify(COPY.welcomeBack);
      navigate(location.state?.from?.pathname || '/panel', { replace: true });
    } catch (err) {
      setErrors({ form: err.message });
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="auth-card" onSubmit={onSubmit} noValidate>
      <h1>Bienvenido a MITIS</h1>
      <p className="lead">Tu espacio sereno para entender tu negocio. Ingresa con calma.</p>

      {errors.form && <p className="hint-error" role="alert">{errors.form}</p>}

      <div className="field">
        <label htmlFor="email">Correo</label>
        <input id="email" type="email" autoComplete="email"
          value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        {errors.email && <span className="hint-error">{errors.email}</span>}
      </div>

      <div className="field">
        <label htmlFor="password">Contraseña</label>
        <input id="password" type="password" autoComplete="current-password"
          value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        {errors.password && <span className="hint-error">{errors.password}</span>}
      </div>

      <button className="btn btn--primary" disabled={busy} style={{ width: '100%' }}>
        {busy ? COPY.loadingShort : 'Ingresar'}
      </button>

      <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--ink-soft)' }}>
        <Link to="/recuperar">Olvidé mi contraseña</Link> · <Link to="/registro">Crear cuenta</Link>
      </p>
    </form>
  );
}