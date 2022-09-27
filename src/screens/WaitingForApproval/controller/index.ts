import { EventNotification } from "@components";

export const pushElement = (
  user: any,
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

export const deleteElement = (list: any[], id: string) => {
  return list.filter((item) => item.id !== id);
};
