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
import { theme } from "../../../../constant";
import { addLikes, addReply, deleteLikes, RootState } from "../../../../redux";
import {
  getTimeCreate,
  getDateCreate,
  handleAmountRounding,
  findPostById,
} from "../../../../utils";
import { BaseButton } from "../../../../components/BaseButton";
import {
  HeartFill,
  HeartOutline,
  Annotation,
} from "../../../../components/Icon";
import { BasePostDetailProps } from "./BasePostDetailModel";
import ModalizeComponent from "../ModalizeComponent";
import { Modalize } from "react-native-modalize";
interface ISizeImage {
  width: number | string | undefined;
  height: number | string | undefined;
}
function BasePostDetail({
  postFocus,
  liked,
  initAmountLike,
  onPressLikeDetail,
}: BasePostDetailProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const repliesRedux = useSelector((state: RootState) => state.forum.replies);

  const [isLiked, setIsLiked] = useState<boolean>(liked);
  const [comment, onChangeComment] = useState<string>();
  const [amountLike, setAmountLike] = useState<number>(initAmountLike);
  // const [amountReplies, setAmountReplies] = useState<number>(initAmountReply);
  const [sizeImage, setSizeImage] = useState<ISizeImage>({
    width: 0,
    height: 0,
  });
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true);

  const runEffectRef = useRef(false);
  const amountReplies = findPostById(postFocus, repliesRedux).data.length || 0;

  useEffect(() => {
    getImage(postFocus.image);
  }, []);

  useEffect(() => {
    if (runEffectRef.current) {
      requestApi();
    } else {
      runEffectRef.current = true;
    }
  }, [amountLike]);

  const requestApi = async () => {
    try {
      const params = {
        post: postFocus,
        user: user,
      };
      if (isLiked) {
        console.log("test: Di vao 1");
        dispatch(addLikes(params));
      } else {
        console.log("test: Di vao 2");
        dispatch(deleteLikes(params));
      }
    } catch (e) {
      console.log("error-detail: ", e);
      runEffectRef.current = false;
      handleSetLikes();
      setIsLiked(!isLiked);
    }
  };

  const handleSetLikes = () => {
    if (isLiked) {
      setAmountLike(amountLike - 1);
    } else {
      setAmountLike(amountLike + 1);
    }
  };

  const handlePressLike = async () => {
    setIsLiked(!isLiked);
    handleSetLikes();
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
      user: user,
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
            source={{ uri: postFocus.avatar }}
            style={styles.avatarUserPost}
          />
          <View style={styles.header}>
            <Text style={styles.textName}>{postFocus.name}</Text>
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
              {handleAmountRounding(amountReplies)} replies
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
