import { AccountStackParamList } from "@navigation/type";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN } from "@constant/index";
import { AccountScreen } from "@screens";
const Stack = createNativeStackNavigator<AccountStackParamList>();
function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREEN.ACCOUNT} component={AccountScreen} />
    </Stack.Navigator>
  );
}

export default AccountStack;
