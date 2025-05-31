import { useState } from 'react';

export default function ETFDisclaimer() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      style={{
        backgroundColor: '#bfdbfe', // helles Blau, ähnlich bg-blue-100
        borderLeft: '4px solid #3b82f6', // blau, ähnlich border-blue-500
        color: '#1e40af', // dunkelblau, ähnlich text-blue-900
        padding: '1.5rem',
        margin: '1.5rem auto',
        borderRadius: '0.375rem',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        position: 'relative',
        maxWidth: '640px',
        marginLeft: '1rem',
        marginRight: '1rem',
      }}
    >
      <button
        onClick={() => setVisible(false)}
        style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.75rem',
          color: '#2563eb',
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
        aria-label="Disclaimer schließen"
      >
        ×
      </button>
      <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>
        Wichtiger Hinweis
      </h2>
      <p>
        Die auf dieser Seite dargestellten ETF-Daten sind künstlich generiert und dienen ausschließlich
        Demonstrationszwecken. Dies ist keine Finanzberatung oder Empfehlung. Bitte konsultieren Sie für
        echte Anlageentscheidungen einen Finanzexperten.
      </p>
    </div>
  );
}
