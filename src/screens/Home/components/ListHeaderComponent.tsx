import { BasePlaceholder } from "@components";
import { Navigation } from "@constant/index";
import { ICommunityAPI, IUserAPI } from "@model";
import { getUserRedux, RootState } from "@redux";
import { theme } from "@theme";
import { getJoinedCommunities } from "@utils";
import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import ItemJoinedCommunity from "./ItemJoinedCommunity";

interface IState {
  navigation: any;
  communitiesRedux: ICommunityAPI[];
  userRedux: IUserAPI;
}

function ListHeaderComponent({
  navigation,
  communitiesRedux,
  userRedux,
}: IState) {
  const [joinedCommunities, setJoinedCommunities] = useState<ICommunityAPI[]>(
    []
  );

  useEffect(() => {
    getCommunities();
  }, [communitiesRedux]);

  const getCommunities = () => {
    let arrayFilter = getJoinedCommunities(userRedux.id, communitiesRedux);
    setJoinedCommunities([...arrayFilter]);
  };

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const handlePressJoinedCommunity = (community: ICommunityAPI) => {
    navigation.navigate(Navigation.COMMUNITY_DETAIL, {
      community: community,
    });
  };

  return (
    <>
      <View style={styles.viewHeader}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate(Navigation.YOUR_PROFILE)}
        >
          <View
            style={[
              styles.imageAvt,
              { backgroundColor: theme.colors.Neutral2 },
            ]}
          >
            <Image source={{ uri: userRedux.avatar }} style={styles.imageAvt} />
          </View>
        </TouchableOpacity>
        <View>
          <Text style={styles.textHello} numberOfLines={2}>
            Hello
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(Navigation.YOUR_PROFILE)}
          >
            <Text style={styles.textName}>{userRedux.name}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewNotification}>
        <Image source={require("../../../../assets/png/notifi.png")} />
        <View style={styles.containerText}>
          <Text style={styles.titleNotification}>News for you</Text>
          <Text style={styles.bodyNotification}>
            You don’t have enough{" "}
            <Text style={{ fontWeight: "600" }}>TomoCoins!</Text>
          </Text>
          <Text style={styles.bodyNotification}>
            Please purchase some in the store.
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.textName}>Joined communities</Text>
        {false ? (
          <View style={[{ flexDirection: "row" }, styles.flatList]}>
            {BasePlaceholder.CommunityJoined(3)}
          </View>
        ) : (
          <FlatList
            data={joinedCommunities}
            keyExtractor={keyExtractor}
            renderItem={({ item }) => (
              <ItemJoinedCommunity
                community={item}
                onPress={handlePressJoinedCommunity}
              />
            )}
            horizontal
            style={styles.flatList}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  textHello: {
    fontWeight: "400",
    fontSize: theme.fontSize.font18,
    color: theme.colors.Neutral6,
  },
  imageAvt: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 20,
  },
  textName: {
    fontWeight: "600",
    fontSize: theme.fontSize.font24,
    color: theme.colors.Neutral10,
  },
  viewNotification: {
    height: 141,
    backgroundColor: theme.colors.colorInput,
    marginVertical: 36,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
  },
  containerText: {
    marginLeft: 19,
    flex: 1,
  },
  titleNotification: {
    fontWeight: "600",
    fontSize: theme.fontSize.font18,
    color: theme.colors.primary,
    marginBottom: 8,
  },
  bodyNotification: {
    fontWeight: "400",
    fontSize: theme.fontSize.font14,
    color: theme.colors.Neutral6,
  },
  flatList: {
    paddingVertical: 20,
  },
});

export default ListHeaderComponent;
