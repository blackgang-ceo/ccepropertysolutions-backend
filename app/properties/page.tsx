import Link from 'next/link';
import { properties } from '@/lib/data';
import { PropertyCard } from '@/components/PropertyCard';

export default function PropertiesPage() {
  return (
    <main className="container page-shell">
      <div className="section-header">
        <div>
          <p className="eyebrow">Listings</p>
          <h1>Property marketplace</h1>
        </div>
        <Link href="/" className="button secondary">
          Back home
        </Link>
      </div>

      <div className="card-grid listings-grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </main>
  );
}
