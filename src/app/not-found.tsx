import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-narrow py-20 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-text-muted mb-8">
        La página que busca no existe o ha sido movida.
      </p>
      <Link
        href="/"
        className="inline-block bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-light transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
