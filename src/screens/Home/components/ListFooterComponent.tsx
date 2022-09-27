import { CommunitiesApi } from "@api";
import {
  BaseButton,
  BaseCategory,
  BasePlaceholder,
  CaretRight,
  TomoCoins,
  ViaFacebook,
  ViaTwitter,
} from "@components";
import { Navigation } from "@constant/index";
import { ICommunityAPI } from "@model";
import { getJoined } from "@redux";
import { theme } from "@theme";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
interface IState {
  navigation: any;
  isLoading: boolean;
  listOthers: ICommunityAPI[];
}

function ListFooterComponent({ navigation, isLoading, listOthers }: IState) {
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  return (
    <>
      <Text style={styles.textName}>Others</Text>
      {isLoading ? (
        <View>{BasePlaceholder.Community(4)}</View>
      ) : (
        <FlatList
          data={listOthers}
          renderItem={({ item }) => (
            <BaseCategory
              item={item}
              isShowTick={false}
              onPress={() =>
                navigation.navigate(Navigation.COMMUNITY_DETAIL, {
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
              onPress={() => navigation.navigate(Navigation.COMMUNITIES_STACK)}
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
          onPress={() => navigation.navigate(Navigation.PURCHASE_TOMO_COIN)}
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
