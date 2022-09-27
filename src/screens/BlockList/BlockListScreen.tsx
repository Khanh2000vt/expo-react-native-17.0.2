import { IApprovalAPI } from "@model";
import { theme } from "@theme";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { BaseHeader, VectorBack } from "../../components";
import { RenderItem } from "./components";
import { getListUser, handleRemoveById } from "./controller";
import { Title } from "./enum";

function BlockListScreen({ navigation }: { navigation: any }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<IApprovalAPI[]>([]);

  useEffect(() => {
    getListUser(setUsers, setIsLoading);
  }, []);

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const handleRemoveBlock = (itemSelected: any) => {
    setUsers(handleRemoveById(itemSelected, users));
  };

  return (
    <View style={styles.container}>
      <BaseHeader
        title={Title.BLOCK_LIST}
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
            <RenderItem item={item} onPress={handleRemoveBlock} />
          )}
          keyExtractor={keyExtractor}
          style={styles.flatList}
          ListEmptyComponent={<Text>Block List Empty!</Text>}
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
    marginTop: 17,
  },
  activityIndicator: {
    marginTop: 40,
  },
});

export default BlockListScreen;
