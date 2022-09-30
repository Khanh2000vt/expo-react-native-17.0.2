import { OtherProfile, SCREEN } from "@constant/index";
import { ICommunityAPI, ILogAPI, IMemberAPI, IUserAPI } from "@model";
import { RootStackParamList } from "@navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { ColorValue } from "react-native";

type INavigation =
  | StackNavigationProp<RootStackParamList, SCREEN.YOUR_PROFILE, undefined>
  | StackNavigationProp<RootStackParamList, SCREEN.OTHER_PROFILE, undefined>;

interface IItemBase {
  id: number;
  icon: React.ReactNode;
  onPress: () => void | undefined;
}

export interface AmountProps extends IItemBase {
  amount: number;
  color: ColorValue;
}

export interface SocialProps extends IItemBase {
  title: string;
}

export interface IProfileSelf {
  activitiesLog: ILogAPI[];
}

export interface IList {
  listAmount?: AmountProps[];
  listSocial?: SocialProps[];
  listJoined?: ICommunityAPI[];
}

interface BaseProfileProps extends IList {
  navigation: INavigation;
  user: IUserAPI | IMemberAPI;
  relationship: OtherProfile;
}

interface ListHeaderProps extends IList {
  navigation: INavigation;
  user: IMemberAPI | IUserAPI;
  relationship: OtherProfile;
}

export interface UseStateProps {
  setIsShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVisibleModal?: React.Dispatch<React.SetStateAction<boolean>>;
  user: IMemberAPI | IUserAPI;
}

interface ListFooterProps extends UseStateProps {
  navigation: INavigation;
  relationship: OtherProfile;
}

interface IProfileSelfItem {
  navigation: INavigation;
}
export type {
  BaseProfileProps,
  ListHeaderProps,
  ListFooterProps,
  IProfileSelfItem,
};
