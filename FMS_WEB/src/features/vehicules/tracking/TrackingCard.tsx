import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ITracking } from '@/typings';
import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { LatLngTuple, Map as LeafletMap } from 'leaflet';
import { formatDateToHumanReadable } from '@/lib/utils';

// This is a component that will set up the map reference
function MapController({
  coordinates,
  setMapRef,
}: {
  coordinates: LatLngTuple;
  setMapRef: (map: LeafletMap) => void;
}) {
  const map = useMap();

  useEffect(() => {
    setMapRef(map);
    map.setView(coordinates);
  }, [map, coordinates, setMapRef]);

  return null;
}

type Props = {
  data: ITracking;
};

export default function TrackingCard({ data }: Props) {
  const mapRef = useRef<LeafletMap | null>(null);

  const coordinates: LatLngTuple = React.useMemo(
    () => [
      parseFloat(data.location.coordinates[1]),
      parseFloat(data.location.coordinates[0]),
    ],
    [data.location.coordinates]
  );

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(coordinates);
    }
  }, [coordinates]);

  const setMapRef = React.useCallback((map: LeafletMap) => {
    mapRef.current = map;
  }, []);

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
          center={coordinates}
          zoom={14}
          style={{ height: '300px', width: '100%' }}
          scrollWheelZoom={false}
        >
          <MapController coordinates={coordinates} setMapRef={setMapRef} />
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
