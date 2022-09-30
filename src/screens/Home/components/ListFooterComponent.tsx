import {
  BaseButton,
  BaseCategory,
  BasePlaceholder,
  CaretRight,
  TomoCoins,
  ViaFacebook,
  ViaTwitter,
} from "@components";
import { SCREEN } from "@constant/index";
import { HomeTabProps } from "@navigation";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
// import { getJoined } from "@redux";
import { ICommunityAPI, IUserAPI } from "@model";
import { theme } from "@theme";
import { getOtherCommunities } from "@utils";

interface IState {
  navigation: HomeTabProps<SCREEN.HOME>["navigation"];
  communitiesRedux: ICommunityAPI[];
  userRedux: IUserAPI;
}

function ListFooterComponent({
  navigation,
  communitiesRedux,
  userRedux,
}: IState) {
  const [otherCommunities, setOtherCommunities] = useState<ICommunityAPI[]>([]);
  useEffect(() => {
    let arrayFilter = getOtherCommunities(userRedux.id, communitiesRedux);
    setOtherCommunities(arrayFilter.slice(0, 5));
  }, [communitiesRedux]);
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  return (
    <>
      <Text style={styles.textName}>Others</Text>
      {false ? (
        <View>{BasePlaceholder.Community(4)}</View>
      ) : (
        <FlatList
          data={otherCommunities}
          renderItem={({ item }) => (
            <BaseCategory
              community={item}
              isShowTick={false}
              onPress={() =>
                navigation.navigate(SCREEN.COMMUNITY_DETAIL, {
                  community: item,
                })
              }
            />
          )}
          keyExtractor={keyExtractor}
          ListFooterComponent={
            <BaseButton
              title="See all"
              IconRight={<CaretRight />}
              backgroundColor={theme.colors.Neutral0}
              color={theme.colors.primary}
              onPress={() =>
                navigation.navigate(SCREEN.COMMUNITIES_STACK, {
                  screen: SCREEN.COMMUNITIES,
                })
              }
            />
          }
        />
      )}
      <View style={styles.viewButton}>
        <BaseButton
          title="Purchase TomoCoins"
          backgroundColor={theme.colors.Neutral1}
          color={theme.colors.Neutral10}
          IconLeft={<TomoCoins style={{ marginHorizontal: 23 }} />}
          style={styles.buttonGray}
          onPress={() => navigation.navigate(SCREEN.PURCHASE_TOMO_COIN)}
        />
        <BaseButton
          title="Introduce via Twitter"
          backgroundColor={theme.colors.Neutral1}
          color={theme.colors.Neutral10}
          IconLeft={<ViaTwitter style={{ marginHorizontal: 23 }} />}
          style={styles.buttonGray}
        />
        <BaseButton
          title="Introduce via Facebook"
          backgroundColor={theme.colors.Neutral1}
          color={theme.colors.Neutral10}
          IconLeft={<ViaFacebook style={{ marginHorizontal: 23 }} />}
          style={styles.buttonGray}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  textName: {
    fontWeight: "600",
    fontSize: theme.fontSize.font24,
    color: theme.colors.Neutral10,
  },
  viewButton: {
    marginBottom: 84,
  },
  buttonGray: {
    height: 68,
    marginTop: 12,
    justifyContent: "flex-start",
  },
});

export default ListFooterComponent;
