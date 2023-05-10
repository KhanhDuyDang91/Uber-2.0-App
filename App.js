import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import store from "./store";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <StackNavigator />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
