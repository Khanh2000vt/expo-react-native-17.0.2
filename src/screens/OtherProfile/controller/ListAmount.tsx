import { AmountProps, Users } from "@components";
import { theme } from "@theme";
import React from "react";

const ListAmount = (amount: number): AmountProps[] => [
  {
    id: 1,
    icon: <Users />,
    amount: amount,
    color: theme.colors.Semantic5,
    onPress: () => {},
  },
];

export default ListAmount;
