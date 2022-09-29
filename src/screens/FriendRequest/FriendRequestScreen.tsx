import React, { useCallback, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

import { BaseHeader, VectorBack } from "@components";
import { IMemberAPI } from "@model";
import { getMemberRedux, getUserRedux } from "@redux";
import { theme } from "@theme";
import { useSelector } from "react-redux";
import ItemRequestPending from "./components/ItemRequestPending";
import { getListMemberRequest } from "@utils";

function FriendRequestScreen({ navigation }: { navigation: any }) {
  const userRedux = useSelector(getUserRedux);
  const memberRedux = useSelector(getMemberRedux);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const listRequest = getListMemberRequest(userRedux, memberRedux);

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  return (
    <View style={styles.container}>
      <BaseHeader
        title="Friend request sent"
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      {false ? (
        <ActivityIndicator style={styles.activityIndicator} />
      ) : (
        <FlatList
          data={listRequest}
          renderItem={({ item }) => (
            <ItemRequestPending item={item} navigation={navigation} />
          )}
          keyExtractor={keyExtractor}
          style={styles.flatList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Neutral0,
    flex: 1,
  },
  styleHeader: {
    paddingHorizontal: 33,
    marginTop: 80,
  },
  flatList: {
    paddingHorizontal: 24,
    paddingTop: 20,
    marginTop: 17,
  },
  activityIndicator: {
    marginTop: 40,
  },
});

export default FriendRequestScreen;
