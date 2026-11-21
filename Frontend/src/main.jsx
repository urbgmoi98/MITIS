/**
 * @module src/main
 * @responsibility Punto de entrada: monta la app con los providers globales.
 * @requirements RNF-06
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { ToastProvider } from './context/ToastContext.jsx';
import { ConsentProvider } from './context/ConsentContext.jsx';
import ErrorBoundary from './components/feedback/ErrorBoundary.jsx';
import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/print.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <ConsentProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </ConsentProvider>
      </AuthProvider>
    </ErrorBoundary>
  </React.StrictMode>
);