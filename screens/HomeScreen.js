import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";

import NavOptions from "../components/NavOptions";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination, setOrigin, selectOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";

navigator.geolocation = require("react-native-geolocation-service");

const HomeScreen = () => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);

  return (
    <SafeAreaView className="flex-1 h-full bg-white">
      <View className="w-full mt-10 ml-4">
        <Image
          style={styles.image}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder={!origin ? "Where From?" : origin.description}
          styles={{
            container: {
              flex: 0,
              width: "90%",
              marginHorizontal: 5,
              elevation: 5,
            },
            textInput: {
              fontSize: 18,
              height: "100%",
              borderBottomWidth: 0.5,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            },
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={500}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          keepResultsAfterBlur={true}
          numberOfLines={1}
        />

        <NavOptions />
        <Text className="text-center py-5 text-2xl -ml-8">Do you mean?</Text>
        <NavFavourites />
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
  searchBar: {
    flex: 0,
  },
});
