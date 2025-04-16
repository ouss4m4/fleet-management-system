import { FallbackProps } from 'react-error-boundary';

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  return (
    <div className="p-4 text-center text-red-600">
      <p className="font-semibold">Something went wrong:</p>
      <pre className="mt-2 text-sm">{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="mt-4 inline-block rounded bg-red-100 px-3 py-1 text-sm font-medium text-red-700 hover:bg-red-200"
      >
        Try again
      </button>
    </div>
  );
}
