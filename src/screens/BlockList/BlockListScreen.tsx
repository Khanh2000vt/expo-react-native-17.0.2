import { theme } from "@theme";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ApprovalApi } from "../../api";
import { BaseHeader, VectorBack } from "../../components";
import { RenderItem } from "./components";
import { handleRemoveById } from "./controller";
import { Title } from "./enum";

function BlockListScreen({ navigation }: { navigation: any }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    getListUser();
  }, []);

  async function getListUser() {
    try {
      const res: any = await ApprovalApi.getAll();
      setUsers([...res]);
      setIsLoading(false);
    } catch (e) {
      setUsers([]);
    }
  }

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
