import React, { memo } from "react";
import { ListFooterProps } from "@components/BaseProfile";
import { OtherProfile } from "@constant/index";
import { ProfileSelf } from "./ProfileSelf";
import ProfileRequestPending from "./ProfileRequestPending";
import ProfileInvitation from "./ProfileInvitation";
import ProfileFriend from "./ProfileFriend";
import ProfileOther from "./ProfileOther";

function ListFooterComponent({
  isProfileSelf,
  status,
  navigation,
  setIsShowAlert,
  setIsVisibleModal,
  setStatus,
}: ListFooterProps) {
  if (isProfileSelf) {
    return <ProfileSelf navigation={navigation} />;
  } else {
    if (status === OtherProfile.REQUEST_PENDING) {
      return <ProfileRequestPending setIsShowAlert={setIsShowAlert} />;
    } else if (status === OtherProfile.INVITATION) {
      return (
        <ProfileInvitation
          setIsShowAlert={setIsShowAlert}
          setIsVisibleModal={setIsVisibleModal}
          setStatus={setStatus}
        />
      );
    } else if (status === OtherProfile.FRIEND) {
      return <ProfileFriend setIsShowAlert={setIsShowAlert} />;
    } else {
      return (
        <ProfileOther
          setIsShowAlert={setIsShowAlert}
          setIsVisibleModal={setIsVisibleModal}
        />
      );
    }
  }
}

export default memo(ListFooterComponent);
