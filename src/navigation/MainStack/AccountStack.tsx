import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AccountScreen,
  BlockListScreen,
  ChangePasswordScreen,
  FriendRequestScreen,
  UpdateProfileScreen,
  WaitingForApprovalScreen,
  YourProfileScreen,
} from "../../screens";
const Stack = createNativeStackNavigator();
function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
    </Stack.Navigator>
  );
}

export default AccountStack;
