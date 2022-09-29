import { OtherProfile } from "@constant/index";
import { ICommunityAPI, ILogAPI, IMemberAPI, IUserAPI } from "@model";
import { ColorValue } from "react-native";

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
  navigation: any;
  user: IUserAPI | IMemberAPI;
  relationship: OtherProfile;
}

interface ListHeaderProps extends IList {
  navigation: any;
  user: IMemberAPI | IUserAPI;
  relationship: OtherProfile;
}

export interface UseStateProps {
  setIsShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVisibleModal?: React.Dispatch<React.SetStateAction<boolean>>;
  user: IMemberAPI | IUserAPI;
}

interface ListFooterProps extends UseStateProps {
  navigation: any;
  relationship: OtherProfile;
}
export type { BaseProfileProps, ListHeaderProps, ListFooterProps };
