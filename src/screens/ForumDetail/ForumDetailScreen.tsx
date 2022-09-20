import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import { useSelector } from "react-redux";
import { RepliesApi } from "../../api";
import {
  Annotation,
  BaseButton,
  BaseHeader,
  BaseInteractive,
  HeartFill,
  HeartOutline,
  VectorBack,
} from "../../components";
import { theme } from "../../constants";
import { RootState } from "../../redux";
import { getDateCreate, getTimeCreate, handleAmountLikes } from "../../utils";

interface ISizeImage {
  width: number | string | undefined;
  height: number | string | undefined;
}

function ForumDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { postFocus, liked } = route.params;
  const user = useSelector((state: RootState) => state.auth.user);
  const amountLike = handleAmountLikes(postFocus.likes);

  const [isLoadMore, setIsLoadMore] = useState<boolean>(true);
  const [isLoadingReplies, setIsLoadingReplies] = useState<boolean>(true);
  const [isLoadingImage, setIsLoadingImage] = useState<boolean>(true);

  const [replies, setReplies] = useState<any[]>([]);
  const [likes, setLikes] = useState<any[]>([]);

  const [pageCurrent, setPageCurrent] = useState<number>(1);
  const [pageLikeCurrent, setPageLikeCurrent] = useState<number>(1);
  // const [isVisible, setIsVisible] = useState<boolean>(false);

  const [sizeImage, setSizeImage] = useState<ISizeImage>({
    width: 0,
    height: 0,
  });

  const modalizeRef = useRef<Modalize>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    getReplies();
    getLiked();
  }, []);

  useEffect(() => {
    getImage(postFocus.image);
  }, []);

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

  async function getReplies() {
    console.log("pageCurrent: ", pageCurrent);
    try {
      const params = { p: pageCurrent, l: 10 };
      setIsLoadMore(true);
      const res: any = await RepliesApi.getAll(params);
      setIsLoadMore(false);
      if (res.length > 0) {
        setReplies(replies.concat(res));
        setPageCurrent(pageCurrent + 1);
      }
      isLoadingReplies && setIsLoadingReplies(false);
    } catch (e) {}
  }

  async function getLiked() {
    console.log("pageLikeCurrent: ", pageLikeCurrent);
    try {
      setIsLoadMore(true);
      const params = { p: pageLikeCurrent, l: 50 };
      const res: any = await RepliesApi.getAll(params);
      setIsLoadMore(false);
      if (res.length > 0) {
        setLikes(likes.concat(res));
        setPageLikeCurrent(pageLikeCurrent + 1);
      }
    } catch (e) {}
  }

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderItem = ({ item }: { item: any }) => {
    return <BaseInteractive user={item} type="reply" />;
  };

  const renderItemModal = ({ item }: { item: any }) => {
    return <BaseInteractive user={item} type="like" />;
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
                onPress={() => setIsLiked(!isLiked)}
              >
                {isLiked ? (
                  <HeartFill width={32} height={32} />
                ) : (
                  <HeartOutline width={32} height={32} />
                )}
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => modalizeRef.current?.open()}
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
                {handleAmountLikes(postFocus.replies)} replies
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

  const ListFooterComponent = () => {
    return isLoadMore ? (
      <ActivityIndicator style={styles.activityIndicator} />
    ) : null;
  };

  function headerComponent() {
    return (
      <View style={[styles.flex, styles.headerModal]}>
        <HeartFill width={32} height={32} />
        <Text style={[styles.textLikes, styles.textLikesModal]}>
          {amountLike} likes
        </Text>
      </View>
    );
  }
  return (
    <GestureHandlerRootView style={styles.container}>
      <BaseHeader
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      <FlatList
        data={replies}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={ListHeaderComponent}
        onEndReached={getReplies}
        onEndReachedThreshold={0}
        ListFooterComponent={ListFooterComponent}
      />
      {/* <Modal
        isVisible={isVisible}
        useNativeDriver={false}
        useNativeDriverForBackdrop
        backdropOpacity={0.5}
        onBackButtonPress={() => setIsVisible(false)}
        onBackdropPress={() => setIsVisible(false)}
        onSwipeComplete={() => setIsVisible(false)}
        swipeDirection={"down"}
        propagateSwipe
        swipeThreshold={200}
        style={{ margin: 0, flex: 1, justifyContent: "flex-start" }}
      >
        <View style={styles.containerModal}>
          <View style={styles.lineModal} />
          <View style={styles.bodyModal}>
            <View style={[styles.flex, styles.headerModal]}>
              <HeartFill width={32} height={32} />
              <Text style={[styles.textLikes, styles.textLikesModal]}>
                {amountLike} likes
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <FlatList
                data={likes}
                style={[styles.flatListModal]}
                keyExtractor={keyExtractor}
                renderItem={renderItemModal}
                ListFooterComponent={ListFooterComponent}
              />
            </View>
          </View>
        </View>
      </Modal> */}

      <Modalize
        ref={modalizeRef}
        HeaderComponent={headerComponent}
        handleStyle={[styles.lineModal]}
        threshold={200}
        modalTopOffset={132}
        childrenStyle={styles.flatListModal}
        closeOnOverlayTap
        // onOverlayPress={() => modalizeRef.current?.close()}
        flatListProps={{
          data: likes,
          renderItem: renderItemModal,
          keyExtractor: keyExtractor,
          showsVerticalScrollIndicator: false,
          onScroll: Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            {
              useNativeDriver: true,
            }
          ),
          scrollEventThrottle: 16,
        }}
      />
    </GestureHandlerRootView>
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
    borderRadius: 8,
    marginBottom: 26,
  },
  placeholderImage: {
    width: "100%",
    height: 224,
    backgroundColor: theme.colors.Neutral1,
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
  //modal
  // containerModal: {
  //   marginTop: 132,
  //   flex: 1,
  // },
  lineModal: {
    height: 0,
    borderColor: theme.colors.Neutral0,
    width: 129,
    borderTopWidth: 5,
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 7,
  },
  bodyModal: {
    backgroundColor: theme.colors.Neutral0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex: 1,
  },
  textLikesModal: {
    fontSize: theme.fontSize.font18,
    lineHeight: 24.52,
    marginLeft: 10,
  },
  headerModal: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: theme.colors.Neutral2,
    paddingHorizontal: 24,
  },
  flatListModal: {
    marginHorizontal: 24,
    flex: 1,
  },
});

export default ForumDetailScreen;
