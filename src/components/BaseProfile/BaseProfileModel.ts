import { OtherProfile } from "@constant/index";
import { ICommunityAPI, IMemberAPI, IUserAPI } from "@model";
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
  activitiesLog: any[];
  notificationFromFollowers?: any[];
}

export interface IList {
  listAmount?: AmountProps[];
  listSocial?: SocialProps[];
  listJoined?: ICommunityAPI[];
}

interface BaseProfileProps extends IList {
  navigation: any;
  isProfileSelf?: boolean;
  type?: OtherProfile;
  user?: IUserAPI;
  member?: IMemberAPI;
}

interface ListHeaderProps extends IList {
  isProfileSelf: boolean;
  status: OtherProfile;
  navigation: any;
  user: IMemberAPI | IUserAPI | undefined;
}

export interface UseStateProps {
  setIsShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVisibleModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setStatus?: React.Dispatch<React.SetStateAction<OtherProfile>>;
}

interface ListFooterProps extends UseStateProps {
  isProfileSelf: boolean;
  status: OtherProfile;
  navigation: any;
}
export type { BaseProfileProps, ListHeaderProps, ListFooterProps };
