/**
 * @module src/context/ConsentContext
 * @responsibility Gobernanza de términos y consentimientos.
 * @requirements RF-19, RF-20, RNF-09
 */
import { createContext, useContext, useEffect, useState } from 'react';
import { governanceApi } from '../api/governance.api.js';
import { useAuth } from './AuthContext.jsx';

const ConsentContext = createContext(null);

export function ConsentProvider({ children }) {
  const { isAuthenticated } = useAuth();
  const [termsVersion, setTermsVersion] = useState(null);
  const [acceptances, setAcceptances] = useState([]);
  const [consents, setConsents] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) return undefined;
    let alive = true;
    setLoading(true);
    Promise.allSettled([governanceApi.terms(), governanceApi.consents.get()])
      .then(([termsResult, consentsResult]) => {
        if (!alive) return;
        if (termsResult.status === 'fulfilled') setTermsVersion(termsResult.value?.version || termsResult.value?.data?.version || null);
        if (consentsResult.status === 'fulfilled') setConsents(consentsResult.value?.data || consentsResult.value || {});
      })
      .finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  }, [isAuthenticated]);

  async function acceptTerms({ version = termsVersion } = {}) {
    const value = await governanceApi.acceptTerms({ version });
    setAcceptances((current) => [...current, { version, date: new Date().toISOString() }]);
    return value;
  }

  async function toggleConsent(purpose, enabled) {
    const next = { ...consents, [purpose]: { enabled, date: new Date().toISOString(), version: termsVersion } };
    setConsents(next);
    await governanceApi.consents.put(next);
  }

  const value = {
    needsTermsAcceptance: Boolean(termsVersion && !acceptances.some((item) => item.version === termsVersion)),
    termsVersion,
    acceptTerms,
    consents,
    toggleConsent,
    loading
  };

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) throw new Error('useConsent debe usarse dentro de ConsentProvider');
  return context;
}
