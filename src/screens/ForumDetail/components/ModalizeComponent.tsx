import React, { useCallback, useRef } from "react";
import { Animated, StyleSheet, Text, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { useSelector } from "react-redux";
import { BaseInteractive, HeartFill } from "../../../components";
import { theme } from "../../../constant";
import { RootState } from "../../../redux";
import { findPostById } from "../../../utils";

// const renderItemModal = ({ item }: { item: any }) => {
//   return ;
// };

interface IState {
  ref: any;
  post: any;
}

function ModalizeComponent({ ref, post }: IState) {
  const likeRedux = useSelector((state: RootState) => state.forum.likes);

  const scrollY = useRef(new Animated.Value(0)).current;
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const data = findPostById(post, likeRedux).data || [];
  console.log("data: ", data);
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
    <Modalize
      ref={ref}
      HeaderComponent={headerComponent}
      handleStyle={[styles.lineModal]}
      threshold={200}
      modalTopOffset={132}
      childrenStyle={styles.flatListModal}
      closeOnOverlayTap
      flatListProps={{
        data: data,
        renderItem: () => <></>,
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
  );
}

const styles = StyleSheet.create({
  flatListModal: {
    marginHorizontal: 24,
    flex: 1,
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
  bodyModal: {
    backgroundColor: theme.colors.Neutral0,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    flex: 1,
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
  textLikes: {
    fontSize: theme.fontSize.font15,
    fontWeight: "500",
    lineHeight: 20,
    color: theme.colors.Neutral8,
    marginLeft: 4,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ModalizeComponent;
