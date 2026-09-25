import { leads } from '@/lib/data';

export default function AgentsPage() {
  return (
    <main className="container page-shell">
      <div className="section-header">
        <div>
          <p className="eyebrow">Team</p>
          <h1>Agent network</h1>
        </div>
      </div>

      <div className="card-grid team-grid">
        {['Alicia Morgan', 'Brandon Lee', 'Sofia Nguyen'].map((agent, index) => (
          <article key={agent} className="card agent-card">
            <div className="avatar">{agent.charAt(0)}</div>
            <h3>{agent}</h3>
            <p>{['Lead listing specialist', 'Buyer advocate', 'Luxury acquisitions'][index]}</p>
            <ul>
              <li>{index + 7} active deals</li>
              <li>{index + 3} new showings</li>
              <li>96% satisfaction</li>
            </ul>
          </article>
        ))}
      </div>

      <section className="card status-card">
        <h2>Lead pipeline</h2>
        <div className="status-list">
          {leads.map((lead) => (
            <div key={lead.id} className="status-row">
              <span>{lead.name}</span>
              <span>{lead.interest}</span>
              <span>{lead.stage}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
