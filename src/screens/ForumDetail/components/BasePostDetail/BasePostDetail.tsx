import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "@theme";
import { BasePostDetailProps } from "./BasePostDetailModel";
import {
  addLike,
  addReply,
  getLikeRedux,
  getMemberRedux,
  getReplyRedux,
  getUserRedux,
  removeLike,
} from "@redux";
import {
  findMemberPostInForum,
  getAmountLikeInForum,
  getAmountReplyInForum,
  getDateCreate,
  getTimeCreate,
  handleAmountRounding,
  isLikedPost,
} from "@utils";
import { Annotation, BaseButton, HeartFill, HeartOutline } from "@components";
interface ISizeImage {
  width: number | string | undefined;
  height: number | string | undefined;
}
function BasePostDetail({ postFocus, onPressLikeDetail }: BasePostDetailProps) {
  const dispatch = useDispatch();
  const userRedux = useSelector(getUserRedux);
  const likeRedux = useSelector(getLikeRedux);
  const memberRedux = useSelector(getMemberRedux);
  const repliesRedux = useSelector(getReplyRedux);

  const amountReply = getAmountReplyInForum(postFocus, repliesRedux);
  const amountLike = getAmountLikeInForum(postFocus, likeRedux);
  const userPost = findMemberPostInForum(postFocus, memberRedux, userRedux);

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [comment, onChangeComment] = useState<string>();
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true);
  const [sizeImage, setSizeImage] = useState<ISizeImage>({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    setIsLiked(isLikedPost(userRedux, likeRedux, postFocus));
  }, [likeRedux]);

  useEffect(() => {
    getImage(postFocus.image);
  }, []);

  const handlePressLike = () => {
    const params = {
      post: postFocus,
      user: userRedux,
    };
    if (isLiked) {
      dispatch(removeLike(params));
    } else {
      dispatch(addLike(params));
    }
  };

  function getImage(imageUrl: string) {
    Image.getSize(imageUrl, (width, height) => {
      // calculate image width and height
      const screenWidth = Dimensions.get("window").width;
      const scaleFactor = width / (screenWidth - 2 * 24);
      const imageHeight = height / scaleFactor;
      setSizeImage({ width: screenWidth - 2 * 24, height: imageHeight });
      setIsLoadingImage(false);
    });
  }

  function handlePressReply() {
    if (!comment || comment.trim().length === 0) {
      return;
    }
    const params = {
      post: postFocus,
      user: userRedux,
      comment: comment,
    };
    dispatch(addReply(params));
    onChangeComment("");
  }
  return (
    <View style={styles.containerHeaderComponent}>
      <View style={{ paddingHorizontal: 24 }}>
        <View style={styles.flex}>
          <Image
            source={{ uri: userPost?.avatar }}
            style={styles.avatarUserPost}
          />
          <View style={styles.header}>
            <Text style={styles.textName}>{userPost?.name}</Text>
            <View style={styles.flex}>
              <Text style={styles.textTime}>
                {getTimeCreate(postFocus.createdAt)}
              </Text>
              <View style={styles.ellipse} />
              <Text style={styles.textTime}>
                {getDateCreate(postFocus.createdAt)}
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Text style={styles.textTitle}>{postFocus.title}</Text>
          <Text style={styles.textBody}>{postFocus.body}</Text>
          {isLoadingImage ? (
            <View style={[styles.image, styles.placeholderImage]} />
          ) : (
            <Image
              source={{ uri: postFocus.image }}
              style={[
                styles.image,
                { width: sizeImage.width, height: sizeImage.height },
              ]}
              resizeMode="cover"
              onLoadEnd={() => {}}
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
                <HeartFill width={32} height={32} />
              ) : (
                <HeartOutline width={32} height={32} />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              //   onPress={() => modalizeRef.current?.open()}
              onPress={onPressLikeDetail}
            >
              <Text style={styles.textLikes}>{amountLike} likes</Text>
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
              {handleAmountRounding(amountReply)} replies
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.flex, styles.viewReply]}>
        <Image source={{ uri: userRedux.avatar }} style={styles.avatarUser} />
        <TextInput
          style={[styles.textBody, styles.inputContainer]}
          placeholder="Your reply"
          onChangeText={onChangeComment}
          value={comment}
          multiline
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
const styles = StyleSheet.create({
  containerHeaderComponent: {
    // paddingHorizontal: 24,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: theme.colors.Neutral2,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarUserPost: {
    width: 48,
    height: 48,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.Semantic4,
  },
  touchableOpacity: {
    padding: 5,
  },
  header: {
    marginLeft: 16,
  },
  textName: {
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    lineHeight: 21.79,
    color: theme.colors.Neutral10,
  },
  textLikes: {
    fontSize: theme.fontSize.font15,
    fontWeight: "500",
    lineHeight: 20,
    color: theme.colors.Neutral8,
    marginLeft: 4,
  },
  viewReply: {
    paddingHorizontal: 24,
    paddingTop: 27,
    paddingBottom: 23,
    borderTopWidth: 1,
    borderColor: theme.colors.Neutral2,
  },
  avatarUser: {
    width: 48,
    height: 48,
    borderRadius: 100,
  },
  textTime: {
    fontWeight: "500",
    fontSize: theme.fontSize.font16,
    lineHeight: 21.79,
    color: theme.colors.Neutral4,
    marginTop: 2,
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
    borderRadius: 8,
    marginBottom: 26,
  },
  placeholderImage: {
    width: "100%",
    height: 224,
    backgroundColor: theme.colors.Neutral1,
  },
  ellipse: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.Neutral4,
    marginHorizontal: 8,
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
  },
  textButton: {
    paddingHorizontal: 0,
  },
});

export default BasePostDetail;
