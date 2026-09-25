import Link from 'next/link';
import { Property } from '@/lib/data';

const formatPrice = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="card property-card">
      <div className="property-visual">
        <span>{property.status}</span>
      </div>
      <div className="property-details">
        <div className="property-header">
          <h3>{property.title}</h3>
          <strong>{formatPrice(property.price)}</strong>
        </div>
        <p>
          {property.city}, {property.state} · {property.type}
        </p>
        <ul>
          <li>{property.beds} Beds</li>
          <li>{property.baths} Baths</li>
          <li>{property.sqft.toLocaleString()} sq ft</li>
        </ul>
        <Link href="/properties" className="button secondary">
          View details
        </Link>
      </div>
    </article>
  );
}
