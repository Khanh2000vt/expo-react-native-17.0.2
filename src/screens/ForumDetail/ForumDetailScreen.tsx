import { theme } from "@theme";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import { useSelector } from "react-redux";
import { RepliesApi } from "../../api";
import {
  BaseHeader,
  BaseInteractive,
  HeartFill,
  VectorBack,
} from "../../components";
import { RootState } from "../../redux";
import { findPostById } from "../../utils";
import {
  BasePostDetail,
  ListFooterComponent,
  ModalizeComponent,
} from "./components";

function ForumDetailScreen({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { postFocus, liked, initAmountLike } = route.params;
  const likeRedux = useSelector((state: RootState) => state.forum.likes);
  const userRedux = useSelector((state: RootState) => state.auth.user);
  const [likes, setLikes] = useState<any[]>([]);
  const modalizeRef = useRef<Modalize>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const data = findPostById(postFocus, likeRedux).data || [];

  const keyExtractor = useCallback((_, index) => index.toString(), []);
  function headerComponent() {
    return (
      <View style={[styles.flex, styles.headerModal]}>
        <HeartFill width={32} height={32} />
        <Text style={[styles.textLikes, styles.textLikesModal]}>
          {data.length} likes
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
        data={[]}
        renderItem={() => <></>}
        keyExtractor={keyExtractor}
        ListHeaderComponent={
          <BasePostDetail
            postFocus={postFocus}
            liked={liked}
            initAmountLike={initAmountLike}
            onPressLikeDetail={() => {
              modalizeRef.current?.open();
            }}
          />
        }
        ListFooterComponent={<ListFooterComponent post={postFocus} />}
      />
      {/* <ModalizeComponent ref={modalizeRef} post={postFocus} /> */}
      <Modalize
        ref={modalizeRef}
        HeaderComponent={headerComponent}
        handleStyle={[styles.lineModal]}
        threshold={200}
        modalTopOffset={132}
        childrenStyle={styles.flatListModal}
        closeOnOverlayTap
        flatListProps={{
          data: data,
          renderItem: ({ item }) => <BaseInteractive user={item} type="like" />,
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
