import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Annotation, HeartFill, HeartOutline } from "@components";
import { addLikes, deleteLikes, RootState } from "@redux";
import { countAmount, handleAmountRounding, handleTimeCreateAt } from "@utils";
import { getActionLike } from "../../controller";
import { RenderItemProps } from "./RenderITemModel";
import { theme } from "@theme";
function RenderItem({ post, onPress }: RenderItemProps) {
  //redux
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const likeRedux = useSelector((state: RootState) => state.forum.likes);
  const repliesRedux = useSelector((state: RootState) => state.forum.replies);
  //state
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likes, setLikes] = useState<number>(0);

  const amountReply = countAmount(post, repliesRedux);
  console.log("likeRedux: ", likeRedux);

  useEffect(() => {
    setIsLiked(getActionLike(likeRedux, user, post));
    setLikes(countAmount(post, likeRedux));
  }, [likeRedux]);

  const handlePressLike = () => {
    try {
      const params = {
        post: post,
        user: user,
      };
      if (!isLiked) {
        dispatch(addLikes(params));
      } else {
        dispatch(deleteLikes(params));
      }
    } catch (e) {
    } finally {
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: post.avatar }} style={styles.avatar} />
      <TouchableOpacity
        style={styles.viewPost}
        activeOpacity={0.8}
        onPress={() => onPress && onPress(post, isLiked, likes, amountReply)}
      >
        <View style={styles.flex}>
          <Text style={styles.textName}>{post.name}</Text>
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
              onPress={handlePressLike}
            >
              {isLiked ? (
                <HeartFill width={28} height={28} />
              ) : (
                <HeartOutline width={28} height={28} />
              )}
            </TouchableOpacity>
            <Text style={styles.textLikes}>{handleAmountRounding(likes)}</Text>
          </View>
          <View style={styles.flex}>
            <TouchableOpacity
              style={styles.touchableOpacity}
              activeOpacity={0.8}
            >
              <Annotation width={28} height={28} />
            </TouchableOpacity>
            <Text style={styles.textLikes}>
              {handleAmountRounding(amountReply)}
            </Text>
          </View>
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
