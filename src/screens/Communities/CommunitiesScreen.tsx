import React, { useCallback, useRef, useState } from "react";
import BaseAreaView from "../../components/BaseAreaView/BaseAreaView";

import { FlatList, StyleSheet, Text, View } from "react-native";
import ArrowRight from "../../../assets/svg/ArrowRight.svg";
import LogoBlue from "../../../assets/svg/LogoBlue.svg";
import BaseButton from "../../components/BaseButton/BaseButton";
import BaseCommunities from "../../components/BaseCommunities/BaseCommunities";
import { theme } from "../../constants/index";
import { getAddITem, getDeleteItem } from "./CommunitiesHandle";

const colors = theme.colors;
const fontSize = theme.fontSize;

function CommunitiesScreen({ navigation }: { navigation: any }) {
  const [countTick, setCountTick] = useState<number>(0);
  const [list, setList] = useState<any[]>([]);
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({ item }: { item: any }) => {
    return <BaseCommunities item={item} onPress={handlePressBaseCommunities} />;
  };

  function handlePressBaseCommunities(pressed: boolean, item: any) {
    if (pressed) {
      setCountTick(countTick + 1);
      setList(getAddITem(list, item));
    } else {
      setCountTick(countTick - 1);
      setList(getDeleteItem(list, item));
    }
  }
  return (
    <BaseAreaView>
      <LogoBlue />
      <Text style={styles.textIntro}>Getting started</Text>
      <Text style={[styles.textHeader, { marginTop: 5 }]}>
        Join your communities
      </Text>
      <View>
        <View style={[styles.viewSNS, { marginBottom: 0 }]}>
          <View style={styles.viewCircle}>
            <Text style={styles.textCircle}>2</Text>
          </View>
          <Text style={[styles.textHeader, styles.textTitle]}>
            Choose communities you prefer
          </Text>
        </View>
        <View style={[styles.viewSNS, { marginTop: 0, marginBottom: 23 }]}>
          <View style={{ width: 36, marginRight: 12 }} />
          <Text style={styles.textDescription}>
            (Up to 3 communities - {countTick}/3)
          </Text>
        </View>
      </View>
      <View style={styles.viewBody}>
        <FlatList
          data={dataTest}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <BaseButton
        title="Next"
        option="solid"
        color={colors.primary}
        IconRight={<ArrowRight fill={colors.primary} stroke={colors.primary} />}
        onPress={() => console.log("Test: ", list)}
        disabled={countTick === 0}
      />
    </BaseAreaView>
  );
}
const dataTest = [
  {
    id: 1,
    title: "Movies",
  },
  {
    id: 2,
    title: "Outdoors",
  },
  {
    id: 3,
    title: "Music",
  },
  {
    id: 4,
    title: "Gaming",
  },
  {
    id: 5,
    title: "2",
  },
  {
    id: 6,
    title: "2",
  },
  {
    id: 7,
    title: "2",
  },
  {
    id: 8,
    title: "1",
  },
  {
    id: 9,
    title: "2",
  },
  {
    id: 10,
    title: "2",
  },
  {
    id: 11,
    title: "2",
  },
  {
    id: 12,
    title: "2",
  },
  {
    id: 13,
    title: "2",
  },
  {
    id: 14,
    title: "2",
  },
];

const styles = StyleSheet.create({
  viewSNS: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 36,
  },
  viewCircle: {
    width: 36,
    height: 36,
    marginRight: 12,
    backgroundColor: colors.Neutral8,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  viewBody: {
    flex: 1,
    marginBottom: 32,
  },
  textIntro: {
    fontWeight: "500",
    fontSize: fontSize.font18,
    color: colors.Neutral8,
    marginTop: 32,
  },
  textHeader: {
    fontWeight: "600",
    fontSize: fontSize.font28,
    color: colors.Neutral10,
    //
  },
  textCircle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: fontSize.font18,
  },
  textTitle: {
    fontSize: fontSize.font18,
  },
  textDescription: {
    fontWeight: "500",
    fontSize: fontSize.font14,
    color: colors.Neutral4,
    marginTop: 4,
  },
});

export default CommunitiesScreen;
