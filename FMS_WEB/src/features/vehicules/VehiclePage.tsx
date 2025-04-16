import DetailsPage from './details/DetailsPage';
import MaintenancePage from './maintenance/MaintenancePage';
import SensorsPage from './sensors/SensorsPage';

export default function VehiclePage() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold">Vehicle Details</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="h-full min-h-80">
          <DetailsPage />
        </div>
        <div className="h-full min-h-80">
          <MaintenancePage />
        </div>
        <div className="h-full min-h-80">
          <SensorsPage />
        </div>
      </div>
    </>
  );
}
