import { BaseHeader, BasePlaceholder, Pencil, VectorBack } from "@components";
import { SCREEN } from "@constant/index";
import { IForumAPI } from "@model";
import { ForumTabProps } from "@navigation";
import { useNavigation } from "@react-navigation/native";
import { getForumRedux } from "@redux";
import { theme } from "@theme";
import React, { useCallback } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { RenderItem } from "./components";
type INav = ForumTabProps<SCREEN.FORUM>["navigation"];
function ForumScreen() {
  const navigation = useNavigation<INav>();
  const postsRedux = useSelector(getForumRedux);

  const keyExtractor = useCallback((_) => _.id, []);

  const handlePressItem = (post: IForumAPI) => {
    navigation.navigate(SCREEN.FORUM_DETAIL, {
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
        onPressRight={() => navigation.navigate(SCREEN.NEW_POST)}
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
