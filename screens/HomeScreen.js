import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";

import NavOptions from "../components/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 h-full bg-white">
      <View className="w-full mt-10 ml-4">
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
