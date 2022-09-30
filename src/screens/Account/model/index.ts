import { SCREEN } from "@constant/index";
import { AccountStackParamList, RootStackParamList } from "@navigation";
import { CompositeNavigationProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
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

type INavigationAccount = CompositeNavigationProp<
  StackNavigationProp<AccountStackParamList, SCREEN.ACCOUNT, undefined>,
  StackNavigationProp<RootStackParamList, keyof RootStackParamList, undefined>
>;

export type {
  MenuComponentProps,
  IMenu,
  AlertComponentProps,
  INavigationAccount,
};
