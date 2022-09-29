enum Input {
  HEIGHT = 58,
  MARGIN_TOP = 4,
  MARGIN_BOTTOM = 16,
}

enum Container {
  PADDING_LEFT = 25,
  PADDING_RIGHT = 23,
}

enum Button {
  HEIGHT = 56,
}

enum OtherProfile {
  FRIEND,
  REQUEST_PENDING,
  APPROVAL,
  BLOCK,
  OTHER,
  MYSELF,
}

enum Navigation {
  ACCOUNT = "AccountScreen",
  ACCOUNT_STACK = "AccountStack",
  ACCOUNTS_SNS = "AccountsSNSScreen",
  BLOCK_LIST = "BlockListScreen",
  COMMUNITIES = "CommunitiesScreen",
  COMMUNITIES_STACK = "CommunitiesStack",
  COMMUNITY_DETAIL = "CommunityDetailScreen",
  CHANGE_PASSWORD = "ChangePasswordScreen",
  FORGOT_PASSWORD = "ForgotPasswordScreen",
  FRIEND_REQUEST = "FriendRequestScreen",
  FORUM_DETAIL = "ForumDetailScreen",
  FORUM = "ForumScreen",
  FORUM_STACK = "ForumStack",
  HOME_STACK = "HomeStack",
  HOME = "HomeScreen",
  LOGIN_STACK = "LoginStack",
  LOGIN = "LoginScreen",
  NEW_POST = "NewPostScreen",
  MAIN_STACK = "MainStack",
  OTP = "OTPScreen",
  OTHER_PROFILE = "OtherProfileScreen",
  PICK_PREFER = "PickPreferScreen",
  PERSONAL_INTRODUCTION = "PersonalIntroductionScreen",
  PURCHASE_TOMO_COIN = "PurchaseTomoCoinScreen",
  REGISTER = "RegisterScreen",
  REGISTER_FORGOT = "RegisterForgotScreen",
  UPDATE_PROFILE = "UpdateProfileScreen",
  SUCCESSFULLY = "SuccessfullyScreen",
  WAITING_FOR_APPROVAL = "WaitingForApprovalScreen",
  YOUR_PROFILE = "YourProfileScreen",
}

export { Input, Container, Button, OtherProfile, Navigation };
