import SensorsPage from './sensors/SensorsPage';
import DetailsPage from './details/DetailsPage';
import MaintenancePage from './maintenance/MaintenancePage';
// import AnalyticsCards from './analytics/AnalyticsCard';
import AnalyticsPage from './analytics/AnalyticsPage';

// import MaintenancxePage from './maintenance/MaintenancePage';

import { Skeleton } from '@/components/ui/skeleton';
import WithSuspenseBoundary from '@/components/WithSuspenceBoundary';
import { useParams } from 'react-router-dom';

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
  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold">Vehicle Details</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <WithSuspenseBoundary fallback={<SkeletonCard />}>
          <div className="h-full min-h-80">
            <DetailsPage />
          </div>
        </WithSuspenseBoundary>

        <WithSuspenseBoundary fallback={<SkeletonCard />}>
          <div className="h-full min-h-80">
            <MaintenancePage />
          </div>
        </WithSuspenseBoundary>

        <WithSuspenseBoundary fallback={<SkeletonCard />}>
          <div className="h-full min-h-80">
            <SensorsPage />
          </div>
        </WithSuspenseBoundary>

        <WithSuspenseBoundary fallback={<SkeletonCard />} resetKeys={[id]}>
          <div className="h-full min-h-80">
            <AnalyticsPage />
          </div>
        </WithSuspenseBoundary>

        <WithSuspenseBoundary fallback={<SkeletonCard />}>
          <div className="h-full min-h-80">{/* <TrackingPage /> */}</div>
        </WithSuspenseBoundary>
      </div>
    </>
  );
}
