import { IUser } from "@model";

export interface BaseInteractiveProps {
  user: any;
  type: "like" | "reply";
}
