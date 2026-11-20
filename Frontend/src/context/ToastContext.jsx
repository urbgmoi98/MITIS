/**
 * @module src/context/ToastContext
 * @responsibility Notificaciones serenas: sin rojo brillante, sin signos de
 *   exclamación, con animación suave.
 * @requirements RNF-06
 */
import { createContext, useCallback, useContext, useRef, useState } from 'react';

const ToastContext = createContext(null);
let seq = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timers = useRef({});

  const dismiss = useCallback((id) => {
    setToasts((ts) => ts.filter((t) => t.id !== id));
    clearTimeout(timers.current[id]);
    delete timers.current[id];
  }, []);

  const push = useCallback((message, tone = 'calm') => {
    const id = ++seq;
    setToasts((ts) => [...ts, { id, message, tone }]);
    timers.current[id] = setTimeout(() => dismiss(id), 6000);
  }, [dismiss]);

  const value = { notify: push };
  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="toast-region" role="status" aria-live="polite">
        {toasts.map((t) => (
          <button key={t.id} className={`toast toast--${t.tone}`} onClick={() => dismiss(t.id)}>
            {t.message}
          </button>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast debe usarse dentro de ToastProvider');
  return ctx;
}