import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import {
  BaseAreaView,
  BaseButton,
  BaseCategory,
  BaseGettingStarted,
  ArrowRight,
} from "@components";

import { Navigation } from "@constant/index";
import { getAddITem, getDeleteItem } from "./PickPreferHandle";
import { theme } from "@theme";
import { getCommunitiesRedux } from "@redux";
import { ICommunityAPI } from "@model";

const colors = theme.colors;

function CommunitiesScreen({ navigation }: { navigation: any }) {
  const communitiesRedux = useSelector(getCommunitiesRedux);
  const [list, setList] = useState<ICommunityAPI[]>([]);

  //flat list
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({ item }: { item: ICommunityAPI }) => {
    return <BaseCategory community={item} onPress={handlePressBaseCategory} />;
  };

  //function
  function handlePressBaseCategory(item: ICommunityAPI, pressed: boolean) {
    if (pressed) {
      setList(getAddITem(list, item));
    } else {
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
        indexUpto={list.length}
      />
      <View style={styles.viewBody}>
        <FlatList
          data={communitiesRedux}
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
            stroke={list.length === 0 ? colors.Neutral3 : colors.primary}
          />
        }
        onPress={() => navigation.navigate(Navigation.PERSONAL_INTRODUCTION)}
        disabled={list.length === 0}
      />
    </BaseAreaView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    flex: 1,
    marginBottom: 32,
  },
});

export default CommunitiesScreen;
