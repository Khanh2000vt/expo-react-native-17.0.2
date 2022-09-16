import { ColorValue } from "react-native";
import { OtherProfile } from "../../constants";

interface List {
  id: number;
  icon: React.ReactNode;
  onPress: () => void;
}

interface AmountProps extends List {
  amount: string;
  color: ColorValue;
}

interface SocialProps extends List {
  title: string;
}

interface BaseProfileProps {
  navigation: any;
  isProfileSelf?: boolean;
  elementProfileSelf?: {
    activitiesLog: any[];
    notificationFromFollowers?: any[];
  };
  avatar?: string;
  name?: string;
  idAccount?: string;
  introduction?: string;
  listAmount?: AmountProps[];
  listSocial?: SocialProps[];
  listJoined?: any[];
  type?: OtherProfile;
  // activities?: any[]
}
export type { BaseProfileProps };
