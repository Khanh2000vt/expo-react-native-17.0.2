import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { CommunitiesApi } from "../../api";
import { BaseCategory, BaseInput, BasePlaceholder } from "../../components";
import { Navigation } from "@constant/index";
import { useDebounce } from "../../hooks";
import { getFindCommunity } from "./controller";
import { theme } from "@theme";

function CommunitiesScreen({ navigation }: { navigation: any }) {
  //input state

  const [value, onChangeValue] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [listCategories, setListCategories] = useState<any[]>([]);
  const [listFilter, setListFilter] = useState<any[]>([]);

  //use hook
  const debounce = useDebounce(value);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    const listFilter = getFindCommunity(debounce, listCategories);
    setListFilter([...listFilter]);
  }, [debounce, listCategories]);

  const getCategories = async () => {
    try {
      const res: any = await CommunitiesApi.getAll();
      setListCategories([...res]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  //function
  function handleOnPressCategories(item: any) {
    navigation.navigate(Navigation.COMMUNITY_DETAIL, {
      community: item,
    });
  }

  //flatList
  const keyExtractor = useCallback((_, index) => index.toString(), []);

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
      {isLoading ? (
        <View style={{ paddingHorizontal: 24 }}>
          {BasePlaceholder.Community(10)}
        </View>
      ) : (
        <FlatList
          data={listFilter}
          renderItem={({ item }) => (
            <BaseCategory
              item={item}
              isShowTick={false}
              onPress={handleOnPressCategories}
            />
          )}
          keyExtractor={keyExtractor}
          ListEmptyComponent={<Text>No results were found !</Text>}
          style={styles.flatList}
        />
      )}
    </View>
  );
}

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
