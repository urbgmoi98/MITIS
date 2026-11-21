/**
 * @module src/components/feedback/ErrorBoundary
 * @responsibility Límite visual sin registrar datos sensibles.
 * @requirements RNF-06, RNF-08
 */
import React from 'react';
import ErrorState from './ErrorState.jsx';

export default class ErrorBoundary extends React.Component {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  componentDidCatch(error) { if (import.meta.env.DEV) console.error(error.name); }
  render() { return this.state.failed ? <ErrorState /> : this.props.children; }
}
