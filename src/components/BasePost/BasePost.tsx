import React, { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../../constants";
import { handleAmountRounding, handleTimeCreateAt } from "../../utils";
import { Annotation, HeartFill, HeartOutline } from "../Icon";
import { BasePostProps } from "./BasePostModel";
import { findIndexPostById, findPostById } from "../../utils/handleCount";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addLikes, deleteLikes, RootState } from "../../redux";
function BasePost({
  post,
  onPress,
  amountReplies,
  amountLikes,
  initStateLike,
  detail = false,
}: BasePostProps) {
  //redux
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  //state
  const [isLiked, setIsLiked] = useState<boolean>(initStateLike);
  const [likes, setLikes] = useState<number>(amountLikes);
  const runEffectRef = useRef(false);

  useEffect(() => {
    if (runEffectRef.current) {
      requestApi();
    } else {
      runEffectRef.current = true;
    }
  }, [likes]);

  const requestApi = async () => {
    try {
      const params = {
        post: post,
        user: user,
      };
      if (isLiked) {
        dispatch(addLikes(params));
      } else {
        dispatch(deleteLikes(params));
      }
    } catch (e) {
      runEffectRef.current = false;
      handleSetLikes();
      setIsLiked(!isLiked);
    }
  };

  const handlePressLike = async () => {
    setIsLiked(!isLiked);
    handleSetLikes();
  };

  const handleSetLikes = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: post.avatar }} style={styles.avatar} />
      <TouchableOpacity
        style={styles.viewPost}
        activeOpacity={0.8}
        onPress={() => onPress && onPress(post, isLiked)}
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
              {handleAmountRounding(amountReplies)}
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

export default BasePost;
