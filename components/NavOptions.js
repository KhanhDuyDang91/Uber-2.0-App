import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order Food",
    image: "https://links.papareact.com/28w",
    screen: "EatScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      className="pl-2 pt-4 pb-4"
      style={{}}
      renderItem={({ item }) => (
        <View
          className=" w-40 mr-6 p-4  rounded-lg  bg-slate-200"
          style={{ overflow: "hidden" }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(item.screen);
            }}
          >
            <View className="flex justify-center items-center">
              <Image
                style={{
                  width: 120,
                  height: 120,
                  resizeMode: "contain",
                }}
                source={{ uri: item.image }}
              />
              <Text className="mt-2 font-bold text-base">{item.title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
