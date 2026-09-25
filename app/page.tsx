import Link from 'next/link';
import { PropertyCard } from '@/components/PropertyCard';
import { properties } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Modern real estate platform</p>
            <h1>Find the right property and grow your portfolio.</h1>
            <p className="lead">
              CCE Property Solutions helps buyers, sellers, and agents manage every step of the real-estate journey.
            </p>
            <div className="cta-row">
              <Link href="/properties" className="button primary">
                Explore listings
              </Link>
              <Link href="/admin" className="button secondary">
                Admin access
              </Link>
            </div>
          </div>
          <div className="hero-panel card">
            <h2>Quick stats</h2>
            <ul className="metric-list">
              <li><strong>1,240+</strong><span>Qualified leads</span></li>
              <li><strong>86%</strong><span>Client retention</span></li>
              <li><strong>32</strong><span>Active agents</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container section-block">
        <div className="section-header">
          <div>
            <p className="eyebrow">Featured homes</p>
            <h2>New property opportunities</h2>
          </div>
          <Link href="/properties" className="text-link">
            See all properties
          </Link>
        </div>

        <div className="card-grid">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>
    </main>
  );
}
