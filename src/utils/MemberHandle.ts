import { IMemberAPI, IUserID } from "@model";

export const getFindMember = (
  item: IUserID,
  members: IMemberAPI[]
): IMemberAPI | undefined => {
  const memberFind = members.find((member) => member.id === item.id_user);
  return memberFind;
};
