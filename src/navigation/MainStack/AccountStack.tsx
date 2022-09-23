import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../constants";
import { AccountScreen } from "../../screens";
const Stack = createNativeStackNavigator();
function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Navigation.ACCOUNT} component={AccountScreen} />
    </Stack.Navigator>
  );
}

export default AccountStack;
