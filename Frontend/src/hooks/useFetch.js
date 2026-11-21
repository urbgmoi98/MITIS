/**
 * @module src/hooks/useFetch
 * @responsibility Carga cancelable y reintentable sin ocultar 401/403.
 * @requirements RNF-06
 */
import { useCallback, useEffect, useState } from 'react';

export default function useFetch(fn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  const retry = useCallback(() => setAttempt((value) => value + 1), []);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);
    Promise.resolve().then(() => fn())
      .then((value) => { if (alive) setData(value); })
      .catch((caught) => {
        if (alive) setError(caught?.status === 401 || caught?.status === 403 ? caught : caught);
      })
      .finally(() => { if (alive) setLoading(false); });
    return () => { alive = false; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, attempt]);

  return { data, loading, error, retry };
}
