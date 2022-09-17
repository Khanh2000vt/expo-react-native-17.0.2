import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { BaseHeader, BasePost, Pencil, VectorBack } from "../../components";
import { theme } from "../../constants";

function ForumScreen({ navigation }: { navigation: any }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    getListPost();
  }, []);

  async function getListPost() {
    try {
      const res = await axios(
        "https://631fe0a5e3bdd81d8eeeacf8.mockapi.io/forum"
      );

      setPosts([...res.data]);
      setIsLoading(false);
    } catch (e) {
      setPosts([]);
    }
  }

  function handlePressPost(post: any) {
    console.log("post: ", post);
    setPosts([post].concat(posts));
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
        <ActivityIndicator style={styles.activityIndicator} />
      ) : (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.flatList}
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
