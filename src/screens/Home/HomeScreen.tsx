// import { getJoined, loginAuth } from "@redux";
import { getCommunitiesRedux, getUserRedux } from "@redux";
import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { ListFooterComponent, ListHeaderComponent } from "./components";

function HomeScreen({ navigation }: { navigation: any }) {
  const communitiesRedux = useSelector(getCommunitiesRedux);
  const userRedux = useSelector(getUserRedux);
  return (
    <View style={styles.container}>
      <FlatList
        data={[]}
        renderItem={null}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <ListHeaderComponent
              navigation={navigation}
              communitiesRedux={communitiesRedux}
              userRedux={userRedux}
            />
            <ListFooterComponent
              navigation={navigation}
              communitiesRedux={communitiesRedux}
              userRedux={userRedux}
            />
          </>
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
