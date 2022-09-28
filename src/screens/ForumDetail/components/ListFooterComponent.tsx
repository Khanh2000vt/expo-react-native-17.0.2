import { BaseInteractive } from "@components";
import { IForumAPI } from "@model";
import { getReplyRedux } from "@redux";
import { getElementReplyInPost } from "@utils";
import React, { useCallback } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

interface IState {
  post: IForumAPI;
}

function ListFooterComponent({ post }: IState) {
  const repliesRedux = useSelector(getReplyRedux);
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const reply = getElementReplyInPost(post, repliesRedux);
  return (
    <FlatList
      data={reply?.data}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => (
        <BaseInteractive userCommentID={item} post={post} type="reply" />
      )}
      ListEmptyComponent={
        <Text style={styles.listEmpty}>No one has commented yet!</Text>
      }
      style={styles.flatList}
      inverted
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    paddingBottom: 30,
  },
  listEmpty: {
    textAlign: "center",
  },
});

export default ListFooterComponent;
