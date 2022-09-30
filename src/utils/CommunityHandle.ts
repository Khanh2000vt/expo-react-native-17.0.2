import {
  ICommunityAPI,
  ICommunityID,
  IMemberAPI,
  IUserAPI,
  IUserID,
} from "@model";
import { getFindMember } from "./MemberHandle";

export const getFindCommunity = (
  communities: ICommunityAPI[],
  item: ICommunityID
): ICommunityAPI | undefined => {
  const communityFind = communities.find(
    (community) => community.id === item.id_community
  );
  return communityFind;
};

export const getCommunityByID = (
  communities: ICommunityAPI[],
  item: ICommunityAPI
) => {
  const communityFind = communities.find(
    (community) => community.id === item.id
  );
  return communityFind;
};

export const getIndexCommunityByID = (
  id: string,
  communities: ICommunityAPI[]
): number => {
  const communityFind = communities.findIndex(
    (community) => community.id === id
  );
  return communityFind;
};

export const getFilterCommunitiesByName = (
  value: string,
  communities: ICommunityAPI[]
): ICommunityAPI[] => {
  let list = communities;
  value = value.toLowerCase();
  if (value === "" || value === undefined) {
    return list;
  } else {
    return list
      .filter((community) => {
        return community.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      })
      .sort((a, b) => {
        return (
          a.name.toLowerCase().indexOf(value) -
          b.name.toLowerCase().indexOf(value)
        );
      });
  }
};

export const isUserJoinedCommunity = (
  userID: string,
  community: ICommunityAPI
): boolean => {
  if (community.members === undefined || community.members.length === 0) {
    return false;
  }
  return community.members.some((member) => member.id_user === userID);
};

export const getJoinedCommunities = (
  userID: string,
  communities: ICommunityAPI[]
): ICommunityAPI[] => {
  if (communities.length === 0) {
    return [];
  } else {
    return communities.filter((community) =>
      community.members.some((member) => member.id_user === userID)
    );
  }
};

export const getOtherCommunities = (
  userID: string,
  communities: ICommunityAPI[]
): ICommunityAPI[] => {
  if (communities.length === 0) {
    return [];
  } else {
    return communities.filter(
      (community) =>
        !community.members.some((member) => member.id_user === userID)
    );
  }
};

export const getMembersInCommunity = async (
  membersID: IUserID[],
  membersRedux: IMemberAPI[],
  userRedux: IUserAPI
) => {
  let members: IMemberAPI[] = [];
  for (let member of membersID) {
    if (member.id_user === "1") {
      const initMember: IMemberAPI = {
        ...userRedux,
        friend: userRedux.friend.length,
      };
      members.push(initMember);
    } else {
      let memberFind = getFindMember(member, membersRedux);
      if (memberFind) {
        members.push(memberFind);
      }
    }
  }
  return members;
};
