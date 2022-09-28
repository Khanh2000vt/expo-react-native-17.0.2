import { IMemberAPI, IUserAPI, IUserComment, IUserID } from "@model";

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
): IMemberAPI[] => {
  const listApproval = user.approval;
  let memberApproval: IMemberAPI[] = [];
  for (let itemApproval of listApproval) {
    let memberFind = members.find(
      (member) => member.id === itemApproval.id_user
    );
    if (memberFind !== undefined) {
      memberApproval.push(memberFind);
    }
  }
  return memberApproval;
};
