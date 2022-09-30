import { ICommunityAPI, IForumAPI, IMemberAPI, IUserAPI } from "@model";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type {
  StackNavigationProp,
  StackScreenProps,
} from "@react-navigation/stack";
//NavigatorScreenParams<HomeTabParamList>

export type AppStackParamList = {
  RootStack: undefined;
};

export type RootStackParamList = {
  // MainStack: NavigatorScreenParams<MainStackParamList>;
  MainStack: NavigatorScreenParams<MainStackParamList>;
  LoginStack: NavigatorScreenParams<LoginStackParamList>;
  CommunityDetailScreen: {
    community: ICommunityAPI;
  };
  YourProfileScreen: undefined;
  UpdateProfileScreen: undefined;
  WaitingForApprovalScreen: undefined;
  FriendRequestScreen: undefined;
  BlockListScreen: undefined;
  ChangePasswordScreen: undefined;
  OtherProfileScreen: {
    userOther: IMemberAPI | IUserAPI;
  };
  PurchaseTomoCoinScreen: undefined;
  ForumStack: NavigatorScreenParams<ForumStackParamList>;
};

export type LoginStackParamList = {
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined;
  RegisterScreen: undefined;
  OTPScreen: {
    type: number;
  };
  AccountsSNSScreen: undefined;
  PickPreferScreen: undefined;
  PersonalIntroductionScreen: undefined;
  RegisterForgotScreen: undefined;
  SuccessfullyScreen: undefined;
};

export type MainStackParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  CommunitiesStack: NavigatorScreenParams<CommunitiesStackParamList>;
  AccountStack: NavigatorScreenParams<AccountStackParamList>;
};

export type ForumStackParamList = {
  ForumScreen: undefined;
  ForumDetailScreen: {
    postFocus: IForumAPI;
  };
  NewPostScreen: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
};

export type CommunitiesStackParamList = {
  CommunitiesScreen: undefined;
};

export type AccountStackParamList = {
  AccountScreen: undefined;
};

//props

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  StackScreenProps<RootStackParamList, T>;

//

export type MainTabProps<T extends keyof MainStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type HomeTabProps<T extends keyof HomeStackParamList> =
  CompositeScreenProps<
    StackScreenProps<HomeStackParamList, T>,
    CompositeScreenProps<
      BottomTabScreenProps<MainStackParamList, "HomeStack">,
      RootStackScreenProps<keyof RootStackParamList>
    >
  >;

export type CommunitiesTabProps<T extends keyof CommunitiesStackParamList> =
  CompositeScreenProps<
    StackScreenProps<CommunitiesStackParamList, T>,
    CompositeScreenProps<
      BottomTabScreenProps<MainStackParamList, "CommunitiesStack">,
      RootStackScreenProps<keyof RootStackParamList>
    >
  >;

export type AccountTabProps<T extends keyof AccountStackParamList> =
  CompositeScreenProps<
    StackScreenProps<AccountStackParamList, T>,
    CompositeScreenProps<
      BottomTabScreenProps<MainStackParamList, "AccountStack">,
      RootStackScreenProps<keyof RootStackParamList>
    >
  >;

export type LoginTabProps<T extends keyof LoginStackParamList> =
  CompositeScreenProps<
    StackScreenProps<LoginStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type ForumTabProps<T extends keyof ForumStackParamList> =
  CompositeScreenProps<
    StackScreenProps<ForumStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
