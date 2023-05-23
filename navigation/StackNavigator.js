import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EatScreen from "../screens/EatScreen";
import MapScreen from "../screens/MapScreen";
import HomeScreen from "../screens/HomeScreen";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        component={HomeScreen}
        name="HomeScreen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={MapScreen}
        name="MapScreen"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={EatScreen}
        name="EatScreen"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const MapStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={NavigateCard}
        name="NavigateCard"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={RideOptionsCard}
        name="RideOptionsCard"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export { HomeStackNavigator, MapStackNavigator };
