import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginStackScreen from "./AuthStack/LoginStack";
import MainStack from "./MainStack/MainStack";

const RootStack = createNativeStackNavigator();
function RootStackScreen() {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <RootStack.Screen name="LoginStackScreen" component={LoginStackScreen} /> */}
      <RootStack.Screen name="MainStack" component={MainStack} />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
