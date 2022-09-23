import React, { useCallback } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { BaseInteractive } from "../../../components";
import { RootState } from "../../../redux";
import { findPostById } from "../../../utils";
interface IState {
  post: any;
}

function ListFooterComponent({ post }: IState) {
  const repliesRedux = useSelector((state: RootState) => state.forum.replies);

  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const replyList = findPostById(post, repliesRedux);
  return (
    <FlatList
      data={replyList.data}
      keyExtractor={keyExtractor}
      renderItem={({ item }) => <BaseInteractive user={item} type="reply" />}
    />
  );
}

export default ListFooterComponent;
