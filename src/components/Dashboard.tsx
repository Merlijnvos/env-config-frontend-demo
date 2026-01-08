import { config } from '../config';

export default function Dashboard() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>
        {config.featureNewDashboard
          ? '🚀 New Dashboard Enabled'
          : 'Old Dashboard'}
      </h1>

      <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
        Environment-based feature flag demo
      </p>
    </div>
  );
}
