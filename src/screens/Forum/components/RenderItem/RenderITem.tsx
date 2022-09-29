import { Annotation, HeartFill, HeartOutline } from "@components";
import {
  addLike,
  getLikeRedux,
  getMemberRedux,
  getReplyRedux,
  getUserRedux,
  removeLike
} from "@redux";
import { theme } from "@theme";
import {
  findMemberPostInForum,
  getAmountLikeInForum,
  getAmountReplyInForum,
  handleAmountRounding,
  handleTimeCreateAt,
  isLikedPost
} from "@utils";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RenderItemProps } from "./RenderITemModel";
function RenderItem({ post, onPress }: RenderItemProps) {
  const dispatch = useDispatch();
  //redux
  const userRedux = useSelector(getUserRedux);
  const likeRedux = useSelector(getLikeRedux);
  const memberRedux = useSelector(getMemberRedux);
  const repliesRedux = useSelector(getReplyRedux);
  //handle
  const amountReply = getAmountReplyInForum(post, repliesRedux);
  const amountLike = getAmountLikeInForum(post, likeRedux);
  const userPost = findMemberPostInForum(post, memberRedux, userRedux);
  //state
  const [isLiked, setIsLiked] = useState<boolean>(false);

  useEffect(() => {
    setIsLiked(isLikedPost(userRedux, likeRedux, post));
  }, [likeRedux]);

  const handlePressLike = () => {
    const params = {
      post: post,
      user: userRedux,
    };
    if (isLiked) {
      dispatch(removeLike(params));
    } else {
      dispatch(addLike(params));
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: userPost?.avatar }} style={styles.avatar} />
      <TouchableOpacity
        style={styles.viewPost}
        activeOpacity={0.8}
        onPress={() => onPress(post)}
      >
        <View style={styles.flex}>
          <Text style={styles.textName}>{userPost?.name}</Text>
          <View style={styles.ellipse} />
          <Text style={styles.textTime}>
            {handleTimeCreateAt(post.createdAt)}
          </Text>
        </View>
        <View>
          <Text style={styles.textTitle} numberOfLines={1}>
            {post.title}
          </Text>
          <Text style={styles.textBody}>{post.body}</Text>
          {!!post.image && post.image !== "" && (
            <Image
              source={{ uri: post.image }}
              style={styles.image}
              resizeMode="cover"
            />
          )}
        </View>
        <View style={styles.flex}>
          <View style={[styles.flex, { marginRight: 28 }]}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              activeOpacity={0.8}
              onPress={handlePressLike}
            >
              {isLiked ? (
                <HeartFill width={28} height={28} />
              ) : (
                <HeartOutline width={28} height={28} />
              )}
            </TouchableOpacity>
            <Text style={styles.textLikes}>{amountLike}</Text>
          </View>
          <TouchableOpacity
            style={[styles.touchableOpacity, styles.flex]}
            activeOpacity={0.8}
            onPress={() => onPress(post)}
          >
            <Annotation width={28} height={28} />
            <Text style={styles.textLikes}>
              {handleAmountRounding(amountReply)}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 20,
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: theme.colors.Neutral2,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.Semantic4,
  },
  viewPost: {
    marginLeft: 13,
    flex: 1,
  },
  image: {
    flex: 1,
    height: 185,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 19,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
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
  },
  textTitle: {
    fontWeight: "600",
    fontSize: theme.fontSize.font18,
    lineHeight: 24.52,
    color: theme.colors.Neutral10,
    marginTop: 16,
    marginBottom: 12,
  },
  textBody: {
    fontWeight: "400",
    lineHeight: 20,
    fontSize: theme.fontSize.font15,
    color: theme.colors.Neutral8,
    marginBottom: 17,
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
});

export default RenderItem;
