import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ForumApi } from "../../api";
import {
  BaseHeader,
  BasePlaceholder,
  BasePost,
  Pencil,
  VectorBack,
} from "../../components";
import { theme } from "../../constants";

function ForumScreen({ navigation }: { navigation: any }) {
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
      setIsLoading(false);
      setIsLoadMore(false);
      setRefreshing(false);
      setPosts([...posts.concat(res)]);
      setPageCurrent(pageCurrent + 1);
    } catch (e) {
      // setPosts([]);
    }
  }

  async function handlePressPost(post: any) {
    const a = await ForumApi.postNewPost(post);
    // getListPost();
  }

  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({ item }: { item: any }) => {
    return (
      <BasePost
        post={item}
        onPress={(post, liked) =>
          navigation.navigate("ForumDetailScreen", {
            postFocus: post,
            liked: liked,
          })
        }
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
          style={styles.flatList}
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
  flatList: {},
});
export default ForumScreen;
