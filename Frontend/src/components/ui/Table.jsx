/**
 * @module src/components/ui/Table
 * @responsibility Tabla responsiva con estados vacío y carga.
 * @requirements RNF-06
 */
export default function Table({ columns = [], rows = [], empty, loading }) {
  if (loading) return <p role="status" aria-live="polite">Organizando tus datos…</p>;
  if (!rows.length) return empty || <p>Aún no hay datos aquí.</p>;
  return (
    <table className="responsive-table">
      <thead><tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr></thead>
      <tbody>{rows.map((row, index) => (
        <tr key={row.id || index}>{columns.map((column) => <td key={column.key} data-label={column.label}>{row[column.key]}</td>)}</tr>
      ))}</tbody>
    </table>
  );
}
