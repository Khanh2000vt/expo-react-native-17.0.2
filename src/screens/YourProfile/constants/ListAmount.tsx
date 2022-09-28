import { Coin, Crown, Users } from "@components";
import { IUserAPI } from "@model";
import { theme } from "@theme";
import React from "react";

const ListAmount = (user: IUserAPI) => [
  {
    id: 1,
    icon: <Users />,
    amount: user.friend.length,
    color: theme.colors.Semantic5,
    onPress: () => {},
  },
  {
    id: 2,
    icon: <Crown />,
    amount: user.crown,
    color: theme.colors.Semantic2,
    onPress: () => {},
  },
  {
    id: 3,
    icon: <Coin />,
    amount: user.coin,
    color: theme.colors.Semantic1,
    onPress: () => {},
  },
];

export default ListAmount;
