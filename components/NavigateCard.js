import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { GOOGLE_MAPS_APIKEY } from "@env";
import { setDestination } from "../slices/navSlice";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">
        Where do you want to arrive?
      </Text>

      <View className="border-t border-gray-200 flex-shrink">
        <View className="items-center mt-3 ">
          <GooglePlacesAutocomplete
            placeholder="Where To?"
            styles={{
              container: {
                flex: 0,
                width: "90%",
                alignContent: "center",
                elevation: 3,
              },
              textInput: {
                fontSize: 18,
                height: "100%",
                borderBottomWidth: 0.5,

                backgroundColor: "rgb(229, 231, 235)",
              },
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
            minLength={2}
            enablePoweredByContainer={false}
            fetchDetails={true}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
