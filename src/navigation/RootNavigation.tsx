import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginStackScreen from "./AuthStack/LoginStack";

const RootStack = createNativeStackNavigator();
function RootStackScreen() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStack.Screen name="LoginStackScreen" component={LoginStackScreen} />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
