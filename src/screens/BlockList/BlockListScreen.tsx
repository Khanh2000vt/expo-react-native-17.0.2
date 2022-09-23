import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import { ApprovalApi } from "../../api";
import { BaseButton, BaseHeader, VectorBack } from "../../components";
import { theme } from "../../constants";
import { RenderItem } from "./components";

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

  const renderItem = ({ item }: { item: any }) => {
    const handleRemoveBlock = (itemSelected: any) => {
      setUsers(users.filter((user) => user.id !== itemSelected.id));
    };
    return <RenderItem item={item} onPress={handleRemoveBlock} />;
  };

  return (
    <View style={styles.container}>
      <BaseHeader
        title="Block List"
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      {isLoading ? (
        <ActivityIndicator style={styles.activityIndicator} />
      ) : (
        <FlatList
          data={users}
          renderItem={renderItem}
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
