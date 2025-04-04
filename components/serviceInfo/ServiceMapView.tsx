import { useRef } from "react";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, MapMarker } from "react-native-maps";

const radiusKm = 3;

const calculateDelta = (latitude: number, radiusKm: number) => {
  const KM_TO_DEGREES = 1 / 111; // 1km ≈ 1/111 degrees
  const latitudeDelta = radiusKm * KM_TO_DEGREES;
  const longitudeDelta = latitudeDelta / Math.cos(latitude * (Math.PI / 180));
  return { latitudeDelta, longitudeDelta };
};

interface MapViewAppProps {
  latitude: number;
  longitude: number;
  displayName: string;
}

const MapViewApp = ({ latitude, longitude, displayName }: MapViewAppProps) => {
  const markerRefs = useRef<MapMarker | null>(null);
  const { latitudeDelta, longitudeDelta } = calculateDelta(latitude, radiusKm);

  const handleMapReady = () => {
    markerRefs.current?.showCallout();
  };

  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      }}
      onMapReady={handleMapReady}
    >
      <Marker
        title={displayName}
        ref={(ref) => (markerRefs.current = ref)}
        pinColor="#FF0000"
        style={{ width: 50, height: 50 }}
        coordinate={{
          latitude,
          longitude,
        }}
      />
    </MapView>
  );
};

export default MapViewApp;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
