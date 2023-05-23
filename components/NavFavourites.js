import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London, UK",
  },
];

const NavFavourites = (props) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View
          style={{
            backgroundColor: "rgb(156 163 175)",
            height: 0.5,
            width: "90%",
          }}
        />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity className="flex-row items-center px-5 pt-2 pb-4  w-11/12 rounded-lg">
          <Ionicons name={icon} size={26} color="black" />
          <View className="ml-4">
            <Text className="text-lg font-semibold">{location}</Text>
            <Text className="text-base text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
      style={{ ...props.style, marginTop: 10 }}
      scrollEnabled={true} // Not scroll
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
