import { OtherProfile } from "@constant/index";
import {
  IMemberAPI,
  IMemberRequest,
  IUserAPI,
  IUserComment,
  IUserID,
} from "@model";
export const getPersonByID = (
  members: IMemberAPI[],
  item: IUserID | IUserComment | undefined,
  user: IUserAPI
): IMemberAPI | IUserAPI | undefined => {
  if (item === undefined) {
    return undefined;
  }
  if (item.id_user === "1") {
    return user;
  } else {
    return members.find((member) => member.id === item.id_user);
  }
};

export const getListMemberApproval = (
  user: IUserAPI,
  members: IMemberAPI[]
): IMemberRequest[] => {
  const listApproval = user.approval;
  let memberApproval: IMemberRequest[] = [];
  for (let itemApproval of listApproval) {
    let memberFind = members.find(
      (member) => member.id === itemApproval.id_user
    );
    if (memberFind !== undefined) {
      let init: IMemberRequest = {
        createdAt: itemApproval.createdAt,
        member: memberFind,
      };
      memberApproval.push(init);
    }
  }
  return memberApproval;
};

export const getListMemberRequest = (user: IUserAPI, members: IMemberAPI[]) => {
  const listRequest = user.request;
  let memberRequest: IMemberRequest[] = [];
  for (let itemRequest of listRequest) {
    let memberFind = members.find(
      (member) => member.id === itemRequest.id_user
    );
    if (memberFind !== undefined) {
      let init: IMemberRequest = {
        createdAt: itemRequest.createdAt,
        member: memberFind,
      };
      memberRequest.push(init);
    }
  }
  return memberRequest;
};

export const getListMemberBlock = (user: IUserAPI, members: IMemberAPI[]) => {
  const listBlock = user.block;
  let memberBlock: IMemberAPI[] = [];
  for (let itemBlock of listBlock) {
    let memberFind = members.find((member) => member.id === itemBlock.id_user);
    if (memberFind !== undefined) {
      memberBlock.push(memberFind);
    }
  }
  return memberBlock;
};

export const getRelationshipMember = (
  member: IMemberAPI | IUserAPI | undefined,
  user: IUserAPI
): OtherProfile => {
  const friend = user.friend;
  const request = user.request;
  const approval = user.approval;
  const block = user.block;
  if (member === undefined) {
    return OtherProfile.OTHER;
  } else if (member.id === user.id) {
    return OtherProfile.MYSELF;
  } else if (friend.some((user) => user.id_user === member.id)) {
    return OtherProfile.FRIEND;
  } else if (request.some((user) => user.id_user === member.id)) {
    return OtherProfile.REQUEST_PENDING;
  } else if (approval.some((user) => user.id_user === member.id)) {
    return OtherProfile.APPROVAL;
  } else if (block.some((user) => user.id_user === member.id)) {
    return OtherProfile.BLOCK;
  } else {
    return OtherProfile.OTHER;
  }
};
