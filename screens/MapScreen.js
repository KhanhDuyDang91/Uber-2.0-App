import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Map from "../components/Map";
import { MapStackNavigator } from "../navigation/StackNavigator";

const MapScreen = () => {
  return (
    <View>
      <View className="h-1/2 mt-8">
        <Map />
      </View>

      <View className="h-1/2 ">
        <MapStackNavigator />
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
