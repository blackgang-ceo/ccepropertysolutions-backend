import { leads } from '@/lib/data';

export default function DashboardPage() {
  return (
    <main className="container page-shell">
      <div className="section-header">
        <div>
          <p className="eyebrow">Performance</p>
          <h1>Agent dashboard</h1>
        </div>
      </div>

      <div className="stats-grid">
        <article className="card stat-card"><h3>Open leads</h3><strong>{leads.length}</strong></article>
        <article className="card stat-card"><h3>Closed deals</h3><strong>18</strong></article>
        <article className="card stat-card"><h3>Avg. response time</h3><strong>2.4h</strong></article>
        <article className="card stat-card"><h3>Revenue</h3><strong>$1.24M</strong></article>
      </div>

      <section className="card status-card">
        <h2>Recent activity</h2>
        <ul className="timeline">
          <li>New buyer inquiry received from Austin area.</li>
          <li>Property showing scheduled for Maple Grove Residence.</li>
          <li>Luxury condo lead moved to follow-up stage.</li>
        </ul>
      </section>
    </main>
  );
}
