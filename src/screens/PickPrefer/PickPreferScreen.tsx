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

import { SCREEN } from "@constant/index";
import { getAddITem, getDeleteItem } from "./PickPreferHandle";
import { theme } from "@theme";
import { getCommunitiesRedux } from "@redux";
import { ICommunityAPI } from "@model";
import { useNavigation } from "@react-navigation/native";
import { LoginTabProps } from "@navigation";
type INav = LoginTabProps<SCREEN.PICK_PREFER>["navigation"];
const colors = theme.colors;

function PickPreferScreen() {
  const navigation = useNavigation<INav>();
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
            stroke={list.length < 3 ? colors.Neutral3 : colors.primary}
          />
        }
        onPress={() => navigation.navigate(SCREEN.PERSONAL_INTRODUCTION)}
        disabled={list.length < 3}
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

export default PickPreferScreen;
