import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import { BaseButton, BaseHeader, VectorBack } from "../../components";
import { theme } from "../../constants";

function BlockListScreen({ navigation }: { navigation: any }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    getListUser();
  }, []);

  async function getListUser() {
    try {
      const res = await axios(
        "https://631fe0a5e3bdd81d8eeeacf8.mockapi.io/approval"
      );

      setUsers([...res.data]);
      setIsLoading(false);
    } catch (e) {
      setUsers([]);
    }
  }

  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.containerItem}>
        <View style={styles.headerItemFlatList}>
          <Image source={{ uri: item.avatar }} style={styles.imageItem} />
          <Text style={styles.textNameItem}>{item.name}</Text>
        </View>
        <BaseButton
          title="Remove block"
          option="solid"
          onPress={() => handleRemoveBlock(item)}
        />
      </View>
    );
  };

  function handleRemoveBlock(item: any) {
    setUsers(users.filter((user) => user.id !== item.id));
  }
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
  containerItem: {
    padding: 24,
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
    marginBottom: 20,
  },
  headerItemFlatList: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  imageItem: {
    width: 42,
    height: 42,
    borderRadius: 100,
    marginRight: 16,
  },
  textNameItem: {
    fontSize: theme.fontSize.font16,
    fontWeight: "600",
    lineHeight: 21.79,
    color: theme.colors.darkerPrimary,
  },
});

export default BlockListScreen;
