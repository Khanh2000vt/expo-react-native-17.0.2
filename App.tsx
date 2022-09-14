import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistGate } from "redux-persist/integration/react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RootStackScreen from "./src/navigation/RootNavigation";
import { Provider } from "react-redux";
import { persistor, store } from "./src/redux";
import { StatusBar } from "react-native";
// const Tab = createTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen
                name="RootStackScreen"
                component={RootStackScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
