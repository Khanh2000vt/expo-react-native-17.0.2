import { LockKeyOpen, Prohibit, SignOut, UserCircle } from "@components";
import { SCREEN } from "@constant/index";
import React from "react";
import { Title } from "../enum";
import { IMenu, INavigationAccount } from "../model";

const ListMenu = (
  navigation: INavigationAccount,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
): IMenu[] => [
  {
    id: 1,
    title: Title.YOUR_PROFILE,
    icon: <UserCircle />,
    onPress: () => navigation.navigate(SCREEN.YOUR_PROFILE),
  },
  {
    id: 2,
    title: Title.BLOCK_LIST,
    icon: <Prohibit />,
    onPress: () => navigation.navigate(SCREEN.BLOCK_LIST),
  },
  {
    id: 3,
    title: Title.CHANGE_PASSWORD,
    icon: <LockKeyOpen />,
    onPress: () => navigation.navigate(SCREEN.CHANGE_PASSWORD),
  },
  {
    id: 4,
    title: Title.LOG_OUT,
    icon: <SignOut />,
    onPress: () => setVisible(true),
  },
];

export default ListMenu;
