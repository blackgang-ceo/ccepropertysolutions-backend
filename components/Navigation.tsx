import Link from 'next/link';

export function Navigation() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          CCE Property Solutions
        </Link>
        <nav aria-label="Main navigation" className="nav">
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/agents">Agents</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
