export default function Home() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Open Cases. Win Skins. Cash Out.</h1>
      <p style={{ color: '#aaa', marginBottom: '2rem' }}>The legal way to play with Steam skins & crypto.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        {['Cases', 'Case Battle', 'Roulette'].map((game) => (
          <div key={game} style={{ background: '#1a1a2e', padding: '1.5rem', borderRadius: '12px', textAlign: 'center', cursor: 'pointer', border: '1px solid #333', transition: 'transform 0.2s', ':hover': { transform: 'scale(1.03)' } }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{game}</div>
            <div style={{ color: '#b967ff', fontSize: '0.9rem' }}>Play now</div>
          </div>
        ))}
      </div>

      <div style={{ background: '#1a1a2e', padding: '1.5rem', borderRadius: '12px', border: '1px solid #333' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '1rem', color: '#ffd700' }}>🔥 Recent Wins</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ccc', padding: '0.5rem 0' }}>
          <span>User123</span>
          <span>★ Karambit | Fade ($1,240)</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ccc', padding: '0.5rem 0' }}>
          <span>ProGamer</span>
          <span>AK-47 | Fire Serpent ($890)</span>
        </div>
      </div>
    </div>
  );
}
