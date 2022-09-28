import { BaseHeader, BasePlaceholder, Pencil, VectorBack } from "@components";
import { Navigation } from "@constant/index";
import { IForumAPI } from "@model";
import { getForumRedux } from "@redux";
import { theme } from "@theme";
import React, { useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { ForumApi } from "../../api";
import { RenderItem } from "./components";

function ForumScreen({ navigation }: { navigation: any }) {
  const postsRedux = useSelector(getForumRedux);
  console.log("postsRedux: ", postsRedux);

  const keyExtractor = useCallback((_) => _.id, []);

  const handlePressItem = (post: IForumAPI) => {
    navigation.navigate(Navigation.FORUM_DETAIL, {
      postFocus: post,
    });
  };
  return (
    <View style={styles.container}>
      <BaseHeader
        title="Forum"
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        IconRight={<Pencil />}
        onPressRight={() => navigation.navigate(Navigation.NEW_POST)}
        styleHeader={styles.styleHeader}
      />
      {false ? (
        <View style={{ marginHorizontal: 24 }}>
          {BasePlaceholder.Forum(10)}
        </View>
      ) : (
        <FlatList
          data={postsRedux}
          renderItem={({ item }) => (
            <RenderItem post={item} onPress={handlePressItem} />
          )}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          extraData={postsRedux}
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
    paddingLeft: 33,
    paddingRight: 24,
    marginTop: 65,
    marginBottom: 16,
  },
  activityIndicator: {
    marginTop: 40,
  },
});
export default ForumScreen;
