import { CommunitiesApi } from "@api";
import { ICommunityAPI } from "@model";
import { getJoined, loginAuth } from "@redux";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { ListFooterComponent, ListHeaderComponent } from "./components";

function HomeScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [listOthers, setListOthers] = useState<ICommunityAPI[]>([]);
  const [isLoadingOthers, setIsLoadingOther] = useState<boolean>(true);
  useEffect(() => {
    getJoinedCommunities();
    getListOthers();
  }, []);

  useEffect(() => {
    if (refreshing) {
      getJoinedCommunities();
      getListOthers();
      dispatch(loginAuth());
    }
  }, [refreshing]);

  async function getListOthers() {
    try {
      const params = { p: 1, l: 4 };
      const res: any = await CommunitiesApi.getParams(params);
      setListOthers([...res]);
    } catch (e) {
      setListOthers([]);
    } finally {
      setIsLoadingOther(false);
      setRefreshing(false);
    }
  }

  function getJoinedCommunities() {
    dispatch(getJoined());
  }

  const handleRefresh = () => {
    setRefreshing(true);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={[]}
        renderItem={null}
        showsVerticalScrollIndicator={false}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        ListHeaderComponent={<ListHeaderComponent navigation={navigation} />}
        ListFooterComponent={
          <ListFooterComponent
            navigation={navigation}
            isLoading={isLoadingOthers}
            listOthers={listOthers}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 59,
  },
  scrollView: {
    paddingTop: 56,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    flexDirection: "row",
  },
  itemFooter: {
    height: 2,
    flex: 1,
  },
});

export default HomeScreen;
