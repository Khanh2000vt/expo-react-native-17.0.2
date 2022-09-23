import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { ForumApi } from "../../api";
import {
  BaseHeader,
  BasePlaceholder,
  BasePost,
  Pencil,
  VectorBack,
} from "../../components";
import { theme } from "../../constants";
import { RootState } from "../../redux";
import {
  countAmount,
  findIndexPostById,
  findPostById,
} from "../../utils/handleCount";

function ForumScreen({ navigation }: { navigation: any }) {
  const likeRedux = useSelector((state: RootState) => state.forum.likes);
  const repliesRedux = useSelector((state: RootState) => state.forum.replies);
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
    // getListPost();
  }

  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({ item }: { item: any }) => {
    const postIndexById = likeRedux.findIndex(
      (likeItem) => likeItem.post_id === item.id
    );
    let initStateLike = false;
    if (postIndexById !== -1 && likeRedux[postIndexById].data.length !== 0) {
      initStateLike = likeRedux[postIndexById].data.some(
        (like) => like.user_id === user.user_id.toString()
      );
    }
    const amountReply = countAmount(item, repliesRedux);
    const amountLike = countAmount(item, likeRedux);
    return (
      <BasePost
        post={item}
        amountReplies={amountReply}
        amountLikes={amountLike}
        onPress={(post, liked) =>
          navigation.navigate("ForumDetailScreen", {
            postFocus: post,
            liked: liked,
            initAmountLike: amountLike,
            initAmountReply: amountReply,
          })
        }
        initStateLike={initStateLike}
      />
    );
  };

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
  return (
    <View style={styles.container}>
      <BaseHeader
        title="Forum"
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        IconRight={<Pencil />}
        onPressRight={() =>
          navigation.navigate("NewPostScreen", {
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
          renderItem={renderItem}
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
