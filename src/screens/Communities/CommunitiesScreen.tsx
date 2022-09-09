import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { BaseCategory, BaseInput } from "../../components";
import { theme } from "../../constants";
import { useDebounce } from "../../hooks";
import { getFindCommunity } from "./handle";

function CommunitiesScreen({ navigation }: { navigation: any }) {
  //input state
  const [value, onChangeValue] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const debounce = useDebounce(value);
  const [listCategories, setListCategories] = useState<{}[]>([]);
  const [listFilter, setListFilter] = useState<{}[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const listFilter = getFindCommunity(debounce, listCategories);
    setListFilter([...listFilter]);
  }, [debounce, listCategories]);

  const getCategories = async () => {
    try {
      const res = await axios(
        "https://6316f6fdcb0d40bc4148114b.mockapi.io/khanhmacro/api/joined"
      );
      console.log("res: ", res.data[0]);
      setListCategories([...res.data]);
      setLoading(false);
    } catch (e) {
      console.log("error: ", e);
      setListCategories([]);
    }
  };

  //function
  function handleOnPressCategories(item: any) {
    navigation.navigate("CommunityDetailScreen", {
      item: item,
    });
  }

  //flatList
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({ item }: { item: any }) => {
    return (
      <BaseCategory
        item={item}
        key={item.id}
        isShowTick={false}
        onPress={handleOnPressCategories}
      />
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Communities</Text>
      <BaseInput
        option="search"
        placeholder="Find a community"
        placeholderTextColor={theme.colors.Neutral4}
        styleContainer={styles.containerInput}
        value={value}
        onChangeText={onChangeValue}
      />
      {/*  */}
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={listFilter}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListEmptyComponent={<Text>No results were found !</Text>}
          initialNumToRender={8}
          style={styles.flatList}
        />
      )}
    </View>
  );
}

//CommunityDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.Neutral0,
  },
  containerInput: {
    marginTop: 20,
    marginBottom: 36,
    marginHorizontal: 24,
  },
  textTitle: {
    fontWeight: "600",
    fontSize: theme.fontSize.font24,
    color: theme.colors.Neutral10,
    marginTop: 80,
    textAlign: "center",
  },
  flatList: {
    paddingHorizontal: 24,
  },
});

export default CommunitiesScreen;
