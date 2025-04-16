import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ITracking } from '@/typings';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngTuple } from 'leaflet';
import { formatDateToHumanReadable } from '@/lib/utils';

type Props = {
  data: ITracking;
};

export default function TrackingCard({ data }: Props) {
  const coordinates: LatLngTuple = [
    parseFloat(data.location.coordinates[1]),
    parseFloat(data.location.coordinates[0]),
  ];
  console.log('Map at', coordinates);
  return (
    <Card className="h-full cursor-pointer shadow-none transition hover:shadow-md">
      <CardHeader className="flex justify-between">
        <h2 className="text-lg font-semibold">Location & Status</h2>
        <div className="text-sm">
          Status:<strong> {data.status}</strong>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-4">
        <MapContainer
          key={coordinates.toString()}
          center={coordinates}
          zoom={14}
          style={{ height: '300px', width: '100%' }}
          scrollWheelZoom={false}
        >
          {/* <MapController coordinates={coordinates} setMapRef={setMapRef} /> */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={coordinates}>
            <Popup>
              <strong>Last Update:</strong>{' '}
              {formatDateToHumanReadable(data.lastUpdate, 'hh:ii')}
            </Popup>
          </Marker>
        </MapContainer>
      </CardContent>
    </Card>
  );
}
