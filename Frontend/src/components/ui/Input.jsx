/**
 * @module src/components/ui/Input
 * @responsibility Campo asociado a su etiqueta y error accesible.
 * @requirements RNF-06
 */
export default function Input({ label, hint, error, id, ...rest }) {
  return (
    <label className="field" htmlFor={id}>
      <span>{label}</span>
      <input id={id} className="input" aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined} {...rest} />
      {error ? <small id={`${id}-error`} className="hint-error" role="alert">{error}</small> : hint ? <small>{hint}</small> : null}
    </label>
  );
}
