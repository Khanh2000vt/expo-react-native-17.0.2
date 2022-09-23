import { Title } from "../enum";
interface IMenu {
  id: number;
  title: Title;
  icon: React.ReactNode;
  onPress: () => void;
}

interface MenuComponentProps {
  menu: IMenu;
}

interface AlertComponentProps {
  onPressLogout: () => void;
  onPressCancel: () => void;
}

export type { MenuComponentProps, IMenu, AlertComponentProps };
