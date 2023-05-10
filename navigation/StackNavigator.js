import { createNativeStackNavigator } from "@react-navigation/native-stack";

import EatScreen from "../screens/EatScreen";
import MapScreen from "../screens/MapScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
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

export default StackNavigator;
