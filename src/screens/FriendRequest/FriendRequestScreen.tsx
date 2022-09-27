import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";

import { ApprovalApi } from "@api";
import { BaseHeader, VectorBack } from "@components";
import { IApprovalAPI } from "@model";
import { theme } from "@theme";
import ItemRequestPending from "./components/ItemRequestPending";
function FriendRequestScreen({ navigation }: { navigation: any }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<IApprovalAPI[]>([]);
  useEffect(() => {
    getListUser();
  }, []);

  async function getListUser() {
    try {
      const res: any = await ApprovalApi.getAll();
      setUsers([...res]);
    } catch (e) {
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  }

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  return (
    <View style={styles.container}>
      <BaseHeader
        title="Friend request sent"
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      {isLoading ? (
        <ActivityIndicator style={styles.activityIndicator} />
      ) : (
        <FlatList
          data={users}
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
