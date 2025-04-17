import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ITracking } from '@/typings';
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import LiveTracker from './LiveTracker';

type Props = {
  data: ITracking;
};

export default function TrackingCard({ data }: Props) {
  if (!data.location) {
    return (
      <Card className="h-full shadow-none">
        <CardHeader className="flex justify-between">
          <h2 className="text-lg font-semibold">Location & Status</h2>
          <div className="text-sm">
            Status:<strong className="capitalize"> {data.status}</strong>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4">
          <p>No location data available.</p>
        </CardContent>
      </Card>
    );
  }
  const coordinates: LatLngTuple = [
    parseFloat(data.location.coordinates[0]), // lat
    parseFloat(data.location.coordinates[1]), // lng
  ];

  return (
    <Card className="h-full shadow-none">
      <CardHeader className="flex justify-between">
        <h2 className="text-lg font-semibold">Location & Status</h2>
        <div className="text-sm">
          Status:<strong> {data.status}</strong>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        <MapContainer
          center={coordinates}
          zoom={14}
          style={{ height: '300px', width: '100%' }}
          scrollWheelZoom={false}
        >
          <LiveTracker coordinates={coordinates} />
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </CardContent>
    </Card>
  );
}
