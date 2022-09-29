import React, { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { IMemberAPI } from "@model";
import { getMemberRedux, getUserRedux, removeMemberBlock } from "@redux";
import { theme } from "@theme";
import { getListMemberBlock } from "@utils";
import { BaseHeader, VectorBack } from "@components";
import { RenderItem } from "./components";
import { Title } from "./enum";

function BlockListScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const userRedux = useSelector(getUserRedux);
  const memberRedux = useSelector(getMemberRedux);
  const listBlock = getListMemberBlock(userRedux, memberRedux);
  const handleRemoveBlock = (userSelected: IMemberAPI) => {
    let param = {
      user: userSelected,
    };
    dispatch(removeMemberBlock(param));
  };

  const keyExtractor = useCallback((_, index) => index.toString(), []);
  return (
    <View style={styles.container}>
      <BaseHeader
        title={Title.BLOCK_LIST}
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      {false ? (
        <ActivityIndicator style={styles.activityIndicator} />
      ) : (
        <FlatList
          data={listBlock}
          renderItem={({ item }) => (
            <RenderItem member={item} onPress={handleRemoveBlock} />
          )}
          keyExtractor={keyExtractor}
          style={styles.flatList}
          ListEmptyComponent={<Text>Block List Empty!</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Neutral0,
    flex: 1,
  },
  styleHeader: {
    paddingHorizontal: 33,
    marginTop: 80,
  },
  flatList: {
    paddingHorizontal: 24,
    marginTop: 17,
  },
  activityIndicator: {
    marginTop: 40,
  },
});

export default BlockListScreen;
