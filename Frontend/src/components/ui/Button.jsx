/**
 * @module src/components/ui/Button
 * @responsibility Botón sereno con estado de carga.
 * @requirements RNF-06
 */
export default function Button({ variant = 'primary', loading = false, disabled, children, ...rest }) {
  return (
    <button className={`btn btn--${variant}`} disabled={disabled || loading} {...rest}>
      {loading ? 'Un momento…' : children}
    </button>
  );
}
