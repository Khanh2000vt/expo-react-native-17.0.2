// import { getJoined, loginAuth } from "@redux";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FlatList, StyleSheet, View } from "react-native";
import { getCommunitiesRedux, getUserRedux } from "@redux";
import { SCREEN } from "@constant/index";
import { HomeTabProps } from "@navigation";
import { useSelector } from "react-redux";
import { ListFooterComponent, ListHeaderComponent } from "./components";
type INav = HomeTabProps<SCREEN.HOME>["navigation"];
function HomeScreen() {
  const navigation = useNavigation<INav>();
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
