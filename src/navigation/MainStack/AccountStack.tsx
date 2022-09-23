import { AccountStackParamList } from "@navigation/type";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "@constant/index";
import { AccountScreen } from "@screens";
const Stack = createNativeStackNavigator<AccountStackParamList>();
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
