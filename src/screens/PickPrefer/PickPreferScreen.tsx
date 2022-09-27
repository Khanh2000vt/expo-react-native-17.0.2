import React, { useCallback, useState } from "react";
import {
  BaseAreaView,
  BaseButton,
  BaseCategory,
  BaseGettingStarted,
  ArrowRight,
} from "@components";

import { FlatList, StyleSheet, View } from "react-native";
import { Navigation } from "@constant/index";
import { getAddITem, getDeleteItem } from "./PickPreferHandle";
import { theme } from "@theme";

const colors = theme.colors;

function CommunitiesScreen({ navigation }: { navigation: any }) {
  const [countTick, setCountTick] = useState<number>(0);
  const [list, setList] = useState<any[]>([]);

  //flat list
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({ item }: { item: any }) => {
    return <BaseCategory item={item} onPress={handlePressBaseCategory} />;
  };

  //function
  function handlePressBaseCategory(item: any, pressed: boolean) {
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
      <BaseGettingStarted
        titleScreen="Join your communities"
        titleStep="Choose communities you prefer"
        comment="Up to 3 communities"
        step={2}
        upto={3}
        indexUpto={countTick}
      />
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
        IconRight={
          <ArrowRight
            stroke={countTick === 0 ? colors.Neutral3 : colors.primary}
          />
        }
        onPress={() => navigation.navigate(Navigation.PERSONAL_INTRODUCTION)}
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
    title: "Gaming",
  },
  {
    id: 6,
    title: "Gaming",
  },
  {
    id: 7,
    title: "Gaming",
  },
  {
    id: 8,
    title: "Gaming",
  },
  {
    id: 9,
    title: "Gaming",
  },
  {
    id: 10,
    title: "Gaming",
  },
  {
    id: 11,
    title: "Gaming",
  },
  {
    id: 12,
    title: "Gaming",
  },
  {
    id: 13,
    title: "Gaming",
  },
  {
    id: 14,
    title: "Gaming",
  },
];

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginBottom: 32,
  },
});

export default CommunitiesScreen;
