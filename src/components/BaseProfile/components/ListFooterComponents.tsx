import React, { memo } from "react";
import { ListFooterProps } from "@components/BaseProfile";
import { OtherProfile } from "@constant/index";
import { ProfileSelf } from "./ProfileSelf";
import ProfileRequestPending from "./ProfileRequestPending";
import ProfileApproval from "./ProfileApproval";
import ProfileFriend from "./ProfileFriend";
import ProfileOther from "./ProfileOther";

function ListFooterComponent({
  navigation,
  setIsShowAlert,
  setIsVisibleModal,
  relationship,
  user,
}: ListFooterProps) {
  if (relationship === OtherProfile.MYSELF) {
    return <ProfileSelf navigation={navigation} />;
  } else {
    if (relationship === OtherProfile.REQUEST_PENDING) {
      return (
        <ProfileRequestPending setIsShowAlert={setIsShowAlert} user={user} />
      );
    } else if (relationship === OtherProfile.APPROVAL) {
      return (
        <ProfileApproval
          setIsShowAlert={setIsShowAlert}
          setIsVisibleModal={setIsVisibleModal}
          user={user}
        />
      );
    } else if (relationship === OtherProfile.FRIEND) {
      return <ProfileFriend setIsShowAlert={setIsShowAlert} user={user} />;
    } else {
      return (
        <ProfileOther
          setIsShowAlert={setIsShowAlert}
          setIsVisibleModal={setIsVisibleModal}
          user={user}
        />
      );
    }
  }
}

export default memo(ListFooterComponent);
