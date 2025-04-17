import { LatLngTuple, Marker as LeafletMarker } from 'leaflet';
import { useEffect, useRef } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

export default function LiveTracker({
  coordinates,
}: {
  coordinates: LatLngTuple;
}) {
  const map = useMap();
  const markerRef = useRef<LeafletMarker | null>(null);

  useEffect(() => {
    // Smoothly pan the map to new coordinates
    map.setView(coordinates);

    // Move the marker manually
    if (markerRef.current) {
      markerRef.current.setLatLng(coordinates);
    }
  }, [coordinates, map]);

  return (
    <Marker
      position={coordinates}
      ref={(marker) => {
        if (marker) markerRef.current = marker;
      }}
    >
      <Popup>Tracking vehicle</Popup>
    </Marker>
  );
}
