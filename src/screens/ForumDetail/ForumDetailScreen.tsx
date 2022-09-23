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
  BasePost,
  BasePostDetail,
  HeartFill,
  HeartOutline,
  VectorBack,
} from "../../components";
import { theme } from "../../constants";
import { RootState } from "../../redux";
import {
  countAmount,
  getDateCreate,
  getTimeCreate,
  handleAmountRounding,
} from "../../utils";

function ForumDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { postFocus, liked, initAmountLike, initAmountReply } = route.params;

  // const likeRedux = useSelector((state: RootState) => state.forum.likes);
  // const repliesRedux = useSelector((state: RootState) => state.forum.replies);

  const [isLoadMore, setIsLoadMore] = useState<boolean>(true);
  const [isLoadingReplies, setIsLoadingReplies] = useState<boolean>(true);

  const [pageCurrent, setPageCurrent] = useState<number>(1);
  const [pageLikeCurrent, setPageLikeCurrent] = useState<number>(1);

  const [replies, setReplies] = useState<any[]>([]);
  const [likes, setLikes] = useState<any[]>([]);

  const modalizeRef = useRef<Modalize>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    getReplies();
    getLiked();
  }, []);

  async function getReplies() {
    try {
      const params = { p: pageCurrent, l: 10 };
      setIsLoadMore(true);
      const res: any = await RepliesApi.getAll(params);
      if (res.length > 0) {
        setReplies(replies.concat(res));
        setPageCurrent(pageCurrent + 1);
      }
    } catch (e) {
    } finally {
      setIsLoadMore(false);
      isLoadingReplies && setIsLoadingReplies(false);
    }
  }

  async function getLiked() {
    try {
      setIsLoadMore(true);
      const params = { p: pageLikeCurrent, l: 50 };
      const res: any = await RepliesApi.getAll(params);
      if (res.length > 0) {
        setLikes(likes.concat(res));
        setPageLikeCurrent(pageLikeCurrent + 1);
      }
    } catch (e) {
    } finally {
      setIsLoadMore(false);
    }
  }

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const renderItem = ({ item }: { item: any }) => {
    return <BaseInteractive user={item} type="reply" />;
  };

  const renderItemModal = ({ item }: { item: any }) => {
    return <BaseInteractive user={item} type="like" />;
  };

  const ListHeaderComponent = () => {
    return (
      <BasePostDetail
        postFocus={postFocus}
        onPressLikeDetail={() => modalizeRef.current?.open()}
        liked={liked}
        initAmountLike={initAmountLike}
        initAmountReply={initAmountReply}
      />
    );
  };

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
          {/* {amountLike} likes */}
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
  textLikes: {
    fontSize: theme.fontSize.font15,
    fontWeight: "500",
    lineHeight: 20,
    color: theme.colors.Neutral8,
    marginLeft: 4,
  },
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
