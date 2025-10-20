export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#0f0f1b', color: 'white', fontFamily: 'system-ui, sans-serif' }}>
        <header style={{ padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #b967ff, #6a11cb)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: 'white' }}>L</div>
            <h1 style={{ fontSize: '1.5rem', background: 'linear-gradient(to right, #b967ff, #ffd700)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>
              lootix.com
            </h1>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ background: '#ffd700', color: '#000', padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold' }}>$247.50</span>
            <button style={{ background: '#b967ff', color: 'white', border: 'none', padding: '6px 16px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
              Deposit
            </button>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
