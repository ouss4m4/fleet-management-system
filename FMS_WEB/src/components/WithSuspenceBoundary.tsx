import { Suspense, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
  resetKeys?: unknown[];
};

export default function WithSuspenseBoundary({
  children,
  fallback,
  resetKeys,
}: Props) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} resetKeys={resetKeys}>
      <Suspense
        fallback={fallback ?? <p className="text-center">Loading...</p>}
      >
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}
