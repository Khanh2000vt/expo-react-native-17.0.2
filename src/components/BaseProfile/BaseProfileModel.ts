interface BaseProfileProps {
  navigation: any;
  isProfileSelf?: boolean;
  joinedCommunities?: any[];
  elementProfileSelf?: {
    activitiesLog: any[];
    notificationFromFollowers?: any[];
  };
}
export type { BaseProfileProps };
