import { StyleSheet, Text, View, Platform } from "react-native";
import React, { useRef, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { useSelector } from "react-redux";

import { selectOrigin, selectDestination } from "../slices/navSlice";
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  /* const fitAllMarkers = () => {
    mapRef.current.fitToCoordinates(
      [{ latitude: origin.location.lat, longitude: origin.location.lng }],
      {
        edgePadding: { top: 30, right: 30, bottom: 30, left: 30 },
        animated: true,
      }
    );
  }; */

  useEffect(() => {
    if (!origin || !destination) return;

    //Zoom & fit to markers

    setTimeout(() => {
      mapRef.current.fitToSuppliedMarkers(
        ["origin", "destination"],
        {
          edgePadding: { top: 30, right: 30, bottom: 30, left: 30 },
        },
        true
      );
    }, 500);
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      className="flex-1"
      mapType="standard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.007,
        longitudeDelta: 0.007,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={2}
          strokeColor="black"
        />
      )}

      {/* Display all marker title and description without clicking */}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        ></Marker>
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
