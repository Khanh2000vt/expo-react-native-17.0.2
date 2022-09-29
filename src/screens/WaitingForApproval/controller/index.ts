import { EventNotification } from "@components";
import { IMemberAPI } from "@model";

export const pushElement = (
  user: IMemberAPI,
  accept: boolean,
  notifications: EventNotification[]
) => {
  let notificationsNew = [
    {
      name: user.name,
      id: Date.now().toString(),
      accept: accept,
    },
  ].concat(notifications);
  if (notifications.length === 5) {
    notificationsNew.slice(0, -1);
  }
  return notificationsNew;
};

export const deleteElement = (list: EventNotification[], id: string) => {
  return list.filter((item) => item.id !== id);
};
