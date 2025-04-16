export type VehicleStatus = 'active' | 'maintenance' | 'offline';

export interface IVehicle {
  id: string;
  name: string;
  model: string;
  type: string;
  region: string;
  status: VehicleStatus;
  maintenanceRecords: IVehicleMaintenance[];
}

export interface IVehicleMaintenance {
  id: string;
  cost: number;
  date: string;
  description: string;
  vehicleId: string;
}

export interface ISensor {
  id: string;
  vehicleId: string;
  name: string;
  type: string;
  unit: string;
  createdAt: string;
}

export interface ILocation {
  type: string;
  coordinates: [string, string];
}

export interface IAnalytics {
  id: string;
  vehicleId: string;
  distanceTraveled: number;
  hoursOperated: number;
  lastUpdated: string;
  location: ILocation;
}
