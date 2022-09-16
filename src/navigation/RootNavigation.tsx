import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import {
  BlockListScreen,
  ChangePasswordScreen,
  CommunityDetailScreen,
  FriendRequestScreen,
  UpdateProfileScreen,
  WaitingForApprovalScreen,
  YourProfileScreen,
  OtherProfileScreen,
  PurchaseTomoCoinScreen,
} from "../screens";
import LoginStackScreen from "./AuthStack/LoginStack";
import ForumStack from "./MainStack/ForumStack";
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
      <RootStack.Screen
        name="YourProfileScreen"
        component={YourProfileScreen}
      />
      <RootStack.Screen
        name="UpdateProfileScreen"
        component={UpdateProfileScreen}
      />
      <RootStack.Screen
        name="WaitingForApprovalScreen"
        component={WaitingForApprovalScreen}
      />
      <RootStack.Screen
        name="FriendRequestScreen"
        component={FriendRequestScreen}
      />
      <RootStack.Screen name="BlockListScreen" component={BlockListScreen} />
      <RootStack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
      />
      <RootStack.Screen
        name="OtherProfileScreen"
        component={OtherProfileScreen}
      />
      <RootStack.Screen
        name="PurchaseTomoCoinScreen"
        component={PurchaseTomoCoinScreen}
      />
      <RootStack.Screen name="ForumStack" component={ForumStack} />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
