import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSelector } from "react-redux";
import { ForumApi, RepliesApi } from "../../api";
import {
  Annotation,
  BaseButton,
  BaseHeader,
  BaseInput,
  BaseInteractive,
  BasePost,
  HeartFill,
  HeartOutline,
  VectorBack,
} from "../../components";
import { theme } from "../../constants";
import { RootState } from "../../redux";
import { getDateCreate, getTimeCreate, handleAmountLikes } from "../../utils";

function ForumDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { postFocus, liked } = route.params;
  const user = useSelector((state: RootState) => state.auth.user);
  const [isLoadMore, setIsLoadMore] = useState<boolean>(true);
  const [isLoadingReplies, setIsLoadingReplies] = useState<boolean>(true);
  const [post] = useState<any>(postFocus);
  const [replies, setReplies] = useState<any[]>([]);
  const [pageCurrent, setPageCurrent] = useState<number>(1);

  useEffect(() => {
    // getPostById();
    console.log("pageCurrent: ", pageCurrent);
    getReplies();
  }, [pageCurrent]);

  async function getReplies() {
    try {
      const params = { p: pageCurrent, l: 10 };
      const res: any = await RepliesApi.getAll(params);
      setReplies(replies.concat(res));
      setIsLoadMore(false);
      isLoadingReplies && setIsLoadingReplies(false);
    } catch (e) {
      // setReplies([]);
    }
  }

  // async function getPostById() {
  //   try {
  //     setPost(postFocus);
  //     setIsLoadingPost(false);
  //   } catch (e) {}
  // }
  const handleEndReached = () => {
    console.log("handleEndReached");
    setIsLoadMore(true);
    setPageCurrent(pageCurrent + 1);
  };

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderItem = ({ item }: { item: any }) => {
    return <BaseInteractive user={item} type="reply" />;
  };

  function ListHeaderComponent() {
    const [isLiked, setIsLiked] = useState<boolean>(liked);
    const [comment, onChangeComment] = useState<string>();

    function handlePressReply() {
      if (!comment || comment.trim().length === 0) {
        return;
      }
      const dateCreate = new Date();
      const userComment = {
        id: (replies.length + 1).toString(),
        name: user.name,
        avatar: user.avatar,
        createdAt: dateCreate.toISOString(),
        body: comment,
      };
      setReplies([userComment].concat(replies));
    }
    return (
      <View style={styles.containerHeaderComponent}>
        <View style={{ paddingHorizontal: 24 }}>
          <View style={styles.flex}>
            <Image
              source={{ uri: post.avatar }}
              style={styles.avatarUserPost}
            />
            <View style={styles.header}>
              <Text style={styles.textName}>{post.name}</Text>
              <View style={styles.flex}>
                <Text style={styles.textTime}>
                  {getTimeCreate(post.createdAt)}
                </Text>
                <View style={styles.ellipse} />
                <Text style={styles.textTime}>
                  {getDateCreate(post.createdAt)}
                </Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.textTitle}>{post.title}</Text>
            <Text style={styles.textBody}>{post.body}</Text>
            <Image
              source={{ uri: post.image }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>

          <View style={styles.flex}>
            <View style={[styles.flex, { marginRight: 28 }]}>
              <TouchableOpacity
                style={styles.touchableOpacity}
                activeOpacity={0.8}
                onPress={() => setIsLiked(!isLiked)}
              >
                {isLiked ? (
                  <HeartFill width={32} height={32} />
                ) : (
                  <HeartOutline width={32} height={32} />
                )}
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8}>
                <Text style={styles.textLikes}>
                  {handleAmountLikes(post.likes)} likes
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flex}>
              <TouchableOpacity
                style={styles.touchableOpacity}
                activeOpacity={0.8}
              >
                <Annotation width={32} height={32} />
              </TouchableOpacity>
              <Text style={styles.textLikes}>
                {handleAmountLikes(post.replies)} replies
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.flex, styles.viewReply]}>
          <Image source={{ uri: user.avatar }} style={styles.avatarUser} />
          <TextInput
            style={[styles.textBody, styles.inputContainer]}
            placeholder="Your reply"
            onChangeText={onChangeComment}
            value={comment}
            multiline
            // textAlignVertical="bottom"
          />
          <BaseButton
            title="Reply"
            style={styles.buttonReply}
            styleText={styles.textButton}
            onPress={handlePressReply}
          />
        </View>
      </View>
    );
  }

  const ListFooterComponent = () => {
    return isLoadMore ? (
      <ActivityIndicator style={styles.activityIndicator} />
    ) : null;
  };

  return (
    <View style={styles.container}>
      <BaseHeader
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      <FlatList
        data={replies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        // showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0}
        ListFooterComponent={ListFooterComponent}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Neutral0,
    flex: 1,
  },
  containerHeaderComponent: {
    // paddingHorizontal: 24,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: theme.colors.Neutral2,
  },
  styleHeader: {
    paddingHorizontal: 33,
    marginTop: 65,
    marginBottom: 16,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  activityIndicator: {
    marginTop: 40,
  },
  textTitle: {
    fontWeight: "600",
    fontSize: theme.fontSize.font18,
    lineHeight: 24.52,
    color: theme.colors.Neutral10,
    marginTop: 20,
    marginBottom: 18,
  },
  textBody: {
    fontWeight: "400",
    lineHeight: 20,
    fontSize: theme.fontSize.font15,
    color: theme.colors.Neutral8,
    marginBottom: 20,
  },
  image: {
    flex: 1,
    width: "100%",
    // width: 336,
    resizeMode: "cover",
    height: 224,
    borderRadius: 8,
    marginBottom: 26,
  },
  textLikes: {
    fontSize: theme.fontSize.font15,
    fontWeight: "500",
    lineHeight: 20,
    color: theme.colors.Neutral8,
    marginLeft: 4,
  },
  touchableOpacity: {
    padding: 5,
  },
  avatarUserPost: {
    width: 48,
    height: 48,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.Semantic4,
  },
  header: {
    marginLeft: 16,
  },
  ellipse: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.Neutral4,
    marginHorizontal: 8,
  },
  textName: {
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    lineHeight: 21.79,
    color: theme.colors.Neutral10,
  },
  textTime: {
    fontWeight: "500",
    fontSize: theme.fontSize.font16,
    lineHeight: 21.79,
    color: theme.colors.Neutral4,
    marginTop: 2,
  },
  avatarUser: {
    width: 48,
    height: 48,
    borderRadius: 100,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: theme.colors.Neutral0,
    paddingHorizontal: 23,
    marginBottom: 0,
  },
  buttonReply: {
    height: undefined,
    paddingVertical: 13,
    // paddingHorizontal: 16,
  },
  textButton: {
    paddingHorizontal: 0,
  },
  viewReply: {
    paddingHorizontal: 24,
    paddingTop: 27,
    paddingBottom: 23,
    borderTopWidth: 1,
    borderColor: theme.colors.Neutral2,
  },
});

export default ForumDetailScreen;
