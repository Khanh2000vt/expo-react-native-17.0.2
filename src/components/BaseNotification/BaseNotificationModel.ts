interface EventNotification {
  name: string;
  id: string;
  accept: boolean;
}

interface BaseNotificationProps {
  notification: EventNotification;
  onPress: (id: string) => void;
}

export type { BaseNotificationProps, EventNotification };
