import { IMemberAPI, IUserAPI } from "@model";

interface BaseMemberProps {
  member: IMemberAPI;
  onPress: (item: IMemberAPI) => void;
}

export type { BaseMemberProps };
