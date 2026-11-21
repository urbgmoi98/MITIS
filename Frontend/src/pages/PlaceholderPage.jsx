/**
 * @module src/pages/PlaceholderPage
 * @responsibility Base funcional temporal para páginas pendientes por hito.
 * @requirements RF-05, RF-06, RF-07, RF-09, RF-12, RF-17, RF-18, RF-21
 */
import PageHeader from '../components/layout/PageHeader.jsx';
import EmptyState from '../components/feedback/EmptyState.jsx';

export default function PlaceholderPage({ title = 'Página en preparación', requirement = 'P2' }) {
  return <div><PageHeader eyebrow="MITIS" title={title} sub={`Esta sección completa su integración en el hito ${requirement}.`} /><EmptyState /></div>;
}
