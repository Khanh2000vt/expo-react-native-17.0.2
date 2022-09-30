import {
  BaseHeader,
  BaseInteractive,
  BaseVirtualizedView,
  HeartFill,
  VectorBack,
} from "@components";
import { SCREEN } from "@constant/enum";
import { ForumTabProps } from "@navigation";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getLikeRedux } from "@redux";
import { theme } from "@theme";
import { getAmountLikeInForum, getElementLikeOfPost } from "@utils";
import React, { useCallback, useRef } from "react";
import { Animated, FlatList, StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import { useSelector } from "react-redux";
import { BasePostDetail, ListFooterComponent } from "./components";

type INavigation = ForumTabProps<SCREEN.FORUM_DETAIL>;

function ForumDetailScreen() {
  const navigation = useNavigation<INavigation["navigation"]>();
  const route = useRoute<INavigation["route"]>();
  const { postFocus } = route.params;
  //redux
  const likeRedux = useSelector(getLikeRedux);
  //handle
  const amountLike = getAmountLikeInForum(postFocus, likeRedux);
  const likes = getElementLikeOfPost(postFocus, likeRedux);

  const modalizeRef = useRef<Modalize>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const keyExtractor = useCallback((_, index) => index.toString(), []);
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
      <BaseVirtualizedView>
        <BasePostDetail
          postFocus={postFocus}
          onPressLikeDetail={() => {
            modalizeRef.current?.open();
          }}
        />
        <ListFooterComponent post={postFocus} />
      </BaseVirtualizedView>
      <Modalize
        ref={modalizeRef}
        HeaderComponent={headerComponent}
        handleStyle={[styles.lineModal]}
        threshold={200}
        modalTopOffset={132}
        childrenStyle={styles.flatListModal}
        closeOnOverlayTap
        flatListProps={{
          data: likes?.data,
          renderItem: ({ item }) => (
            <BaseInteractive userID={item} post={postFocus} type="like" />
          ),
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
  headerModal: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: theme.colors.Neutral2,
    paddingHorizontal: 24,
  },
  textLikesModal: {
    fontSize: theme.fontSize.font18,
    lineHeight: 24.52,
    marginLeft: 10,
  },
  flatListModal: {
    marginHorizontal: 24,
    flex: 1,
  },
});

export default ForumDetailScreen;
