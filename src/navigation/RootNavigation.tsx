import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import { SCREEN } from "../constant";
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
import { RootStackParamList } from "./type";

const RootStack = createNativeStackNavigator<RootStackParamList>();
function RootStackScreen() {
  const token = useSelector((state: RootState) => state.auth.token);
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!!token ? (
        <RootStack.Screen name={SCREEN.MAIN_STACK} component={MainStack} />
      ) : (
        <RootStack.Screen
          name={SCREEN.LOGIN_STACK}
          component={LoginStack}
        />
      )}
      <RootStack.Screen
        name={SCREEN.COMMUNITY_DETAIL}
        component={CommunityDetailScreen}
      />
      <RootStack.Screen
        name={SCREEN.YOUR_PROFILE}
        component={YourProfileScreen}
      />
      <RootStack.Screen
        name={SCREEN.UPDATE_PROFILE}
        component={UpdateProfileScreen}
      />
      <RootStack.Screen
        name={SCREEN.WAITING_FOR_APPROVAL}
        component={WaitingForApprovalScreen}
      />
      <RootStack.Screen
        name={SCREEN.FRIEND_REQUEST}
        component={FriendRequestScreen}
      />
      <RootStack.Screen
        name={SCREEN.BLOCK_LIST}
        component={BlockListScreen}
      />
      <RootStack.Screen
        name={SCREEN.CHANGE_PASSWORD}
        component={ChangePasswordScreen}
      />
      <RootStack.Screen
        name={SCREEN.OTHER_PROFILE}
        component={OtherProfileScreen}
      />
      <RootStack.Screen
        name={SCREEN.PURCHASE_TOMO_COIN}
        component={PurchaseTomoCoinScreen}
      />
      <RootStack.Screen name={SCREEN.FORUM_STACK} component={ForumStack} />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;
