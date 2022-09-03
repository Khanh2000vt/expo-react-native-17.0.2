import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AccountScreen,
  BlockListScreen,
  ChangePasswordScreen,
  FriendRequestScreen,
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
      <Stack.Screen name="YourProfileScreen" component={YourProfileScreen} />
      <Stack.Screen
        name="WaitingForApprovalScreen"
        component={WaitingForApprovalScreen}
      />
      <Stack.Screen
        name="FriendRequestScreen"
        component={FriendRequestScreen}
      />
      <Stack.Screen name="BlockListScreen" component={BlockListScreen} />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
    </Stack.Navigator>
  );
}

export default AccountStack;
