import { OtherProfile } from "@constant/index";
import { ICommunityAPI } from "@model";
import { ColorValue } from "react-native";

interface IItemBase {
  id: number;
  icon: React.ReactNode;
  onPress: () => void | undefined;
}

interface IUserProfile {
  avatar?: string;
  name?: string;
  idAccount?: string;
  introduction?: string;
}

export interface AmountProps extends IItemBase {
  amount: string;
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

interface BaseProfileProps extends IUserProfile, IList {
  navigation: any;
  isProfileSelf?: boolean;
  elementProfileSelf?: IProfileSelf;
  type?: OtherProfile;
}

interface ListHeaderProps extends IList, IUserProfile {
  isProfileSelf: boolean;
  status: OtherProfile;
  navigation: any;
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
