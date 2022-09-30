import { TabAccount, TabCommunities, TabHome } from "@components";
import { SCREEN } from "@constant/index";
import { theme } from "@theme";

export const getCaseTabBar = (route: any, isFocused: boolean) => {
  let textLabel;
  let IconItem;
  if (route.name === SCREEN.HOME_STACK) {
    textLabel = "Home";
    IconItem = (
      <TabHome
        stroke={isFocused ? theme.colors.primary : theme.colors.Neutral3}
      />
    );
  } else if (route.name === SCREEN.COMMUNITIES_STACK) {
    textLabel = "Communities";
    IconItem = (
      <TabCommunities
        stroke={isFocused ? theme.colors.primary : theme.colors.Neutral3}
      />
    );
  } else if (route.name === SCREEN.ACCOUNT_STACK) {
    textLabel = "Account";
    IconItem = (
      <TabAccount
        stroke={isFocused ? theme.colors.primary : theme.colors.Neutral3}
      />
    );
  }
  return [textLabel, IconItem];
};
