import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { Navigation } from "../constants";
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
import LoginStack from "./AuthStack/LoginStack";
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
        <RootStack.Screen name={Navigation.MAIN_STACK} component={MainStack} />
      ) : (
        <RootStack.Screen
          name={Navigation.LOGIN_STACK}
          component={LoginStack}
        />
      )}
      <RootStack.Screen
        name={Navigation.COMMUNITY_DETAIL}
        component={CommunityDetailScreen}
      />
      <RootStack.Screen
        name={Navigation.YOUR_PROFILE}
        component={YourProfileScreen}
      />
      <RootStack.Screen
        name={Navigation.UPDATE_PROFILE}
        component={UpdateProfileScreen}
      />
      <RootStack.Screen
        name={Navigation.WAITING_FOR_APPROVAL}
        component={WaitingForApprovalScreen}
      />
      <RootStack.Screen
        name={Navigation.FRIEND_REQUEST}
        component={FriendRequestScreen}
      />
      <RootStack.Screen
        name={Navigation.BLOCK_LIST}
        component={BlockListScreen}
      />
      <RootStack.Screen
        name={Navigation.CHANGE_PASSWORD}
        component={ChangePasswordScreen}
      />
      <RootStack.Screen
        name={Navigation.OTHER_PROFILE}
        component={OtherProfileScreen}
      />
      <RootStack.Screen
        name={Navigation.PURCHASE_TOMO_COIN}
        component={PurchaseTomoCoinScreen}
      />
      <RootStack.Screen name={Navigation.FORUM_STACK} component={ForumStack} />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
