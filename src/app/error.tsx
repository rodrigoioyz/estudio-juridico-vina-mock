'use client';

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-narrow py-20 text-center">
      <h1 className="text-3xl font-bold text-primary mb-4">
        Algo salió mal
      </h1>
      <p className="text-text-muted mb-8">
        Ocurrió un error inesperado. Puede intentar nuevamente.
      </p>
      <button
        onClick={reset}
        className="bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-light transition-colors"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
