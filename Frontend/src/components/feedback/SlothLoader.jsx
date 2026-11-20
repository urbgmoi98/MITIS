/**
 * @module src/components/feedback/SlothLoader
 * @responsibility Estado de carga sereno: perezoso estilizado + texto tranquilo.
 * @requirements RNF-06
 */
import { COPY } from '../../config/copy.es.js';

export default function SlothLoader({ text = COPY.loading, full = false }) {
  return (
    <div className={full ? 'sloth-loader sloth-loader--full' : 'sloth-loader'} role="status" aria-live="polite">
      <svg viewBox="0 0 120 90" className="sloth-loader__svg" aria-hidden="true">
        <g className="sloth-loader__swing">
          <path d="M60 12 q-4 10 0 18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="60" cy="52" rx="26" ry="20" fill="currentColor" opacity="0.16" />
          <ellipse cx="60" cy="52" rx="26" ry="20" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="52" cy="48" r="2.4" fill="currentColor" />
          <circle cx="68" cy="48" r="2.4" fill="currentColor" />
          <path d="M54 58 q6 5 12 0" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
          <path d="M40 62 q-8 8 -2 14 M80 62 q8 8 2 14" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </g>
      </svg>
      <p className="sloth-loader__text">{text}</p>
    </div>
  );
}