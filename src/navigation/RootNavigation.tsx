import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { CommunityDetailScreen } from "../screens";
import LoginStackScreen from "./AuthStack/LoginStack";
import MainStack from "./MainStack/MainStack";

const RootStack = createNativeStackNavigator();
function RootStackScreen() {
  const token = useSelector((state: RootState) => state.auth.token);
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!!token ? (
        <RootStack.Screen name="MainStack" component={MainStack} />
      ) : (
        <RootStack.Screen
          name="LoginStackScreen"
          component={LoginStackScreen}
        />
      )}
      <RootStack.Screen
        name="CommunityDetailScreen"
        component={CommunityDetailScreen}
      />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
