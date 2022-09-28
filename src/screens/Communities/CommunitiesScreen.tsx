import React, { useCallback, useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Navigation } from "@constant/index";
import { getCommunitiesRedux } from "@redux";
import { theme } from "@theme";
import { getFilterCommunitiesByName } from "@utils";
import { useSelector } from "react-redux";
import { BaseCategory, BaseInput, BasePlaceholder } from "@components";
import { useDebounce } from "@hooks";
import { ICommunityAPI } from "@model";

function CommunitiesScreen({ navigation }: { navigation: any }) {
  //redux
  const communitiesRedux = useSelector(getCommunitiesRedux);
  //state
  const [value, onChangeValue] = useState<string>();
  const [listFilter, setListFilter] =
    useState<ICommunityAPI[]>(communitiesRedux);
  //use hook
  const debounce = useDebounce(value);
  //ref
  const firstRenderedRef = useRef(false);
  useEffect(() => {
    if (firstRenderedRef.current) {
      const listFilter = getFilterCommunitiesByName(debounce, communitiesRedux);
      setListFilter([...listFilter]);
    } else {
      firstRenderedRef.current = true;
    }
  }, [debounce, communitiesRedux]);

  //function
  function handleOnPressCategories(community: ICommunityAPI) {
    navigation.navigate(Navigation.COMMUNITY_DETAIL, {
      community: community,
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
      {false ? (
        <View style={{ paddingHorizontal: 24 }}>
          {BasePlaceholder.Community(10)}
        </View>
      ) : (
        <FlatList
          data={listFilter}
          renderItem={({ item }) => (
            <BaseCategory
              community={item}
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
