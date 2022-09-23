import { GestureResponderEvent } from "react-native";
import { Title } from "../enum";
interface IMenu {
  id: number;
  title: Title;
  icon: React.ReactNode;
  onPress: () => void | undefined;
}

interface MenuComponentProps {
  menu: IMenu;
}

interface AlertComponentProps {
  onPressLogout: () => void | undefined;
  onPressCancel: () => void | undefined;
}

export type { MenuComponentProps, IMenu, AlertComponentProps };
