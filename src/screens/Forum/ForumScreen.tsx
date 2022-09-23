import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { ForumApi } from "../../api";
import {
  BaseHeader,
  BasePlaceholder,
  Pencil,
  VectorBack,
} from "../../components";
import { Navigation, theme } from "../../constant";
import { RootState } from "../../redux";
import { RenderItem } from "./components/RenderItem";

function ForumScreen({ navigation }: { navigation: any }) {
  const user = useSelector((state: RootState) => state.auth.user);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<any[]>([]);
  const [pageCurrent, setPageCurrent] = useState<number>(1);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(false);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    getListPost();
  }, []);

  async function getListPost() {
    try {
      setIsLoadMore(true);
      setRefreshing(true);
      const params = { p: pageCurrent, l: 10 };
      const res: any = await ForumApi.getAll(params);
      setPosts([...posts.concat(res)]);
      setPageCurrent(pageCurrent + 1);
    } catch (e) {
    } finally {
      setIsLoading(false);
      setIsLoadMore(false);
      setRefreshing(false);
    }
  }

  async function handlePressPost(post: any) {
    const a = await ForumApi.postNewPost(post);
  }

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const ListFooterComponent = () => {
    return isLoadMore ? (
      <ActivityIndicator style={styles.activityIndicator} />
    ) : null;
  };

  const handleRefresh = () => {
    // setIsLoading(true);
    setPosts([]);
    setPageCurrent(1);
    getListPost();
  };

  const handlePressItem = (
    post: any,
    liked: boolean,
    amountLike: number,
    amountReply: number
  ) => {
    navigation.navigate(Navigation.FORUM_DETAIL, {
      postFocus: post,
      liked: liked,
      initAmountLike: amountLike,
      initAmountReply: amountReply,
    });
  };
  return (
    <View style={styles.container}>
      <BaseHeader
        title="Forum"
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        IconRight={<Pencil />}
        onPressRight={() =>
          navigation.navigate(Navigation.NEW_POST, {
            onPressPost: handlePressPost,
          })
        }
        styleHeader={styles.styleHeader}
      />
      {isLoading ? (
        <View style={{ marginHorizontal: 24 }}>
          {BasePlaceholder.Forum(10)}
        </View>
      ) : (
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <RenderItem post={item} onPress={handlePressItem} />
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyExtractor}
          ListFooterComponent={ListFooterComponent}
          onEndReached={getListPost}
          onEndReachedThreshold={0}
          refreshing={refreshing}
          onRefresh={handleRefresh}
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
