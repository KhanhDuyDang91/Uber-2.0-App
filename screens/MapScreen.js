import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Map from "../components/Map";

const MapScreen = () => {
  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>

      <View className="h-1/2 bg-orange-400">
        <Text>Hahahh</Text>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
