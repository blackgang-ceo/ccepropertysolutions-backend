import { leads } from '@/lib/data';

export default function AdminPage() {
  return (
    <main className="container page-shell">
      <div className="section-header">
        <div>
          <p className="eyebrow">Control center</p>
          <h1>Administrative dashboard</h1>
        </div>
      </div>

      <div className="stats-grid">
        <article className="card stat-card"><h3>Listings</h3><strong>48</strong></article>
        <article className="card stat-card"><h3>Investors</h3><strong>12</strong></article>
        <article className="card stat-card"><h3>Pending deals</h3><strong>7</strong></article>
        <article className="card stat-card"><h3>Lease expirations</h3><strong>4</strong></article>
      </div>

      <section className="card status-card">
        <h2>Lead queue</h2>
        <div className="status-list">
          {leads.map((lead) => (
            <div key={lead.id} className="status-row">
              <span>{lead.name}</span>
              <span>{lead.email}</span>
              <span>{lead.source}</span>
              <span>{lead.stage}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
