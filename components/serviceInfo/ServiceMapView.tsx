import * as Linking from "expo-linking";
import { useRef } from "react";
import { StyleSheet } from "react-native";
import MapView, {
  PROVIDER_GOOGLE,
  Marker,
  MapMarker,
  Callout,
} from "react-native-maps";

import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

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
  directionsUri: string;
}

const MAX_CALLOUT_WIDTH = 340;

const MapViewApp = ({
  latitude,
  longitude,
  displayName = "",
  directionsUri,
}: Partial<MapViewAppProps>) => {
  const markerRefs = useRef<MapMarker | null>(null);

  if (latitude === undefined || longitude === undefined) {
    return <></>;
  }

  const { latitudeDelta, longitudeDelta } = calculateDelta(latitude, radiusKm);

  const textWidth = displayName.length * 7 + 20;
  const validTextWidth =
    textWidth > MAX_CALLOUT_WIDTH ? MAX_CALLOUT_WIDTH : textWidth;

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
      onPress={() => {
        if (!directionsUri) {
          return;
        }

        void Linking.openURL(directionsUri);
      }}
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
      >
        <Callout tooltip>
          <ThemedView style={{ ...styles.callOutTitle, width: validTextWidth }}>
            <ThemedText style={styles.title}>{displayName}</ThemedText>
          </ThemedView>
        </Callout>
      </Marker>
    </MapView>
  );
};

export default MapViewApp;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  callOutTitle: {
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  title: {
    fontSize: 12,
    lineHeight: 17,
    textAlign: "center",
  },
});
