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
  OTHER,
  REQUEST_PENDING,
  INVITATION,
  FRIEND,
}

enum Navigation {
  MAIN_STACK = "MainStack",
  LOGIN_STACK = "LoginStack",
  FORUM_STACK = "ForumStack",
  HOME_STACK = "HomeStack",
  COMMUNITIES_STACK = "CommunitiesStack",
  ACCOUNT_STACK = "AccountStack",
  LOGIN = "LoginScreen",
  FORGOT_PASSWORD = "ForgotPasswordScreen",
  REGISTER = "RegisterScreen",
  OTP = "OTPScreen",
  PICK_PREFER = "PickPreferScreen",
  ACCOUNTS_SNS = "AccountsSNSScreen",
  PERSONAL_INTRODUCTION = "PersonalIntroductionScreen",
  REGISTER_FORGOT = "RegisterForgotScreen",
  SUCCESSFULLY = "SuccessfullyScreen",
  COMMUNITY_DETAIL = "CommunityDetailScreen",
  YOUR_PROFILE = "YourProfileScreen",
  UPDATE_PROFILE = "UpdateProfileScreen",
  WAITING_FOR_APPROVAL = "WaitingForApprovalScreen",
  FRIEND_REQUEST = "FriendRequestScreen",
  BLOCK_LIST = "BlockListScreen",
  CHANGE_PASSWORD = "ChangePasswordScreen",
  OTHER_PROFILE = "OtherProfileScreen",
  PURCHASE_TOMO_COIN = "PurchaseTomoCoinScreen",
  ACCOUNT = "AccountScreen",
  COMMUNITIES = "CommunitiesScreen",
  FORUM = "ForumScreen",
  FORUM_DETAIL = "ForumDetailScreen",
  NEW_POST = "NewPostScreen",
  HOME = "HomeScreen",
}

export { Input, Container, Button, OtherProfile, Navigation };
