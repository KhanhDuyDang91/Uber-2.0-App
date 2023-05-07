import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";

import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white h-full">
      <View className="p-10">
        <Image
          style={styles.image}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
