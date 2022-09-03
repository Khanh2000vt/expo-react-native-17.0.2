import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { BaseCategory, BaseInput } from "../../components";
import { theme } from "../../constants";
import { useDebounce } from "../../hooks";
function CommunitiesScreen({ navigation }: { navigation: any }) {
  //input state
  const [value, onChangeValue] = useState<string>();
  const debounce = useDebounce(value);
  const [listCategories, setListCategories] = useState<{}[]>([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const res = await axios(
        "http://follower-matching-api.adamo.tech/api/user/categories"
      );
      console.log(res);
    } catch (e) {
      // console.log("e: ", e);
      setListCategories([...dataTest]);
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
      <FlatList
        data={listCategories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListEmptyComponent={<Text>Null ...</Text>}
        initialNumToRender={8}
        style={styles.flatList}
      />
    </View>
  );
}

//CommunityDetail

const dataTest = [
  { id: 1, title: "Gaming", members: "256" },
  { id: 2, title: "Outdoors", members: "3621" },
  { id: 3, title: "Music", members: "1056" },
  { id: 4, title: "Movies", members: "20335" },
  { id: 5, title: "News and Society", members: "256" },
  { id: 6, title: "Automotive", members: "1334" },
  { id: 7, title: "Macro", members: "1434" },
  { id: 8, title: "React", members: "5634" },
  { id: 9, title: "Native", members: "1243" },
  { id: 10, title: "Jock", members: "375" },
  { id: 11, title: "Home", members: "578" },
  { id: 12, title: "Screen", members: "431" },
];

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
