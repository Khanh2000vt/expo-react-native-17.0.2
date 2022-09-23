import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  MainStack: undefined;
  LoginStack: undefined;
  CommunityDetailScreen: undefined;
  YourProfileScreen: undefined;
  UpdateProfileScreen: undefined;
  WaitingForApprovalScreen: undefined;
  FriendRequestScreen: undefined;
  BlockListScreen: undefined;
  ChangePasswordScreen: undefined;
  OtherProfileScreen: undefined;
  PurchaseTomoCoinScreen: undefined;
  ForumStack: undefined;
};

export type CommunityDetailNavigation = NativeStackScreenProps<
  RootStackParamList,
  "CommunityDetailScreen"
>;

export type YourProfileNavigation = NativeStackScreenProps<
  RootStackParamList,
  "YourProfileScreen"
>;

export type UpdateProfileNavigation = NativeStackScreenProps<
  RootStackParamList,
  "UpdateProfileScreen"
>;

export type WaitingForApprovalNavigation = NativeStackScreenProps<
  RootStackParamList,
  "WaitingForApprovalScreen"
>;

export type FriendRequestNavigation = NativeStackScreenProps<
  RootStackParamList,
  "FriendRequestScreen"
>;

export type BlockListNavigation = NativeStackScreenProps<
  RootStackParamList,
  "BlockListScreen"
>;

export type ChangePasswordNavigation = NativeStackScreenProps<
  RootStackParamList,
  "ChangePasswordScreen"
>;

export type OtherProfileNavigation = NativeStackScreenProps<
  RootStackParamList,
  "OtherProfileScreen"
>;

export type PurchaseTomoCoinNavigation = NativeStackScreenProps<
  RootStackParamList,
  "PurchaseTomoCoinScreen"
>;

export type LoginStackParamList = {
  LoginScreen: undefined;
  ForgotPasswordScreen: undefined;
  RegisterScreen: undefined;
  OTPScreen: undefined;
  AccountsSNSScreen: undefined;
  PickPreferScreen: undefined;
  PersonalIntroductionScreen: undefined;
  RegisterForgotScreen: undefined;
  SuccessfullyScreen: undefined;
};

export type LoginNavigation = NativeStackScreenProps<
  LoginStackParamList,
  "LoginScreen"
>;

export type ForgotPasswordNavigation = NativeStackScreenProps<
  LoginStackParamList,
  "ForgotPasswordScreen"
>;

export type RegisterNavigation = NativeStackScreenProps<
  LoginStackParamList,
  "RegisterScreen"
>;

export type OTPNavigation = NativeStackScreenProps<
  LoginStackParamList,
  "OTPScreen"
>;

export type AccountsSNSNavigation = NativeStackScreenProps<
  LoginStackParamList,
  "AccountsSNSScreen"
>;

export type PickPreferNavigation = NativeStackScreenProps<
  LoginStackParamList,
  "PickPreferScreen"
>;

export type PersonalIntroductionNavigation = NativeStackScreenProps<
  LoginStackParamList,
  "PersonalIntroductionScreen"
>;

export type RegisterForgotNavigation = NativeStackScreenProps<
  LoginStackParamList,
  "RegisterForgotScreen"
>;

export type SuccessfullyNavigation = NativeStackScreenProps<
  LoginStackParamList,
  "SuccessfullyScreen"
>;

export type MainStackParamList = {
  HomeStack: undefined;
  CommunitiesStack: undefined;
  AccountStack: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
};

export type HomeNavigation = NativeStackScreenProps<
  HomeStackParamList,
  "HomeScreen"
>;

export type CommunitiesStackParamList = {
  CommunitiesScreen: undefined;
};

export type CommunitiesNavigation = NativeStackScreenProps<
  CommunitiesStackParamList,
  "CommunitiesScreen"
>;

export type AccountStackParamList = {
  AccountScreen: undefined;
};

export type AccountNavigation = NativeStackScreenProps<
  AccountStackParamList,
  "AccountScreen"
>;

export type ForumStackParamList = {
  ForumScreen: undefined;
  ForumDetailScreen: undefined;
  NewPostScreen: undefined;
};

export type ForumNavigation = NativeStackScreenProps<
  ForumStackParamList,
  "ForumScreen"
>;

export type ForumDetailNavigation = NativeStackScreenProps<
  ForumStackParamList,
  "ForumDetailScreen"
>;

export type NewPostNavigation = NativeStackScreenProps<
  ForumStackParamList,
  "NewPostScreen"
>;
