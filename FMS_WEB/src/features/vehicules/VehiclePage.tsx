import { Suspense } from 'react';
import SensorsPage from './sensors/SensorsPage';
import DetailsPage from './details/DetailsPage';
import MaintenancePage from './maintenance/MaintenancePage';
// import AnalyticsCards from './analytics/AnalyticsCard';
import AnalyticsPage from './analytics/AnalyticsPage';

// import MaintenancxePage from './maintenance/MaintenancePage';

import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <div className="h-full min-h-80 w-full bg-white">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </div>
  );
}

export default function VehiclePage() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold">Vehicle Details</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="h-full min-h-80">
          <Suspense fallback={<SkeletonCard />}>
            <DetailsPage />
          </Suspense>
        </div>

        <Suspense fallback={<SkeletonCard />}>
          <div className="h-full min-h-80">
            <MaintenancePage />
          </div>
        </Suspense>

        <Suspense fallback={<SkeletonCard />}>
          <div className="h-full min-h-80">
            <SensorsPage />
          </div>
        </Suspense>

        <Suspense fallback={<SkeletonCard />}>
          <div className="h-full min-h-80">
            <AnalyticsPage />
          </div>
        </Suspense>

        <Suspense fallback={<SkeletonCard />}>
          <div className="h-full min-h-80">{/* <TrackingPage /> */}</div>
        </Suspense>
      </div>
    </>
  );
}
