import React, { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  BaseButton,
  BaseCategory,
  TomoCoins,
  CaretRight,
  ViaFacebook,
  ViaTwitter,
} from "../../components";
import { theme } from "../../constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getJoined, RootState } from "../../redux";

function HomeScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState<boolean>(true);
  const joinedCommunities = useSelector(
    (state: RootState) => state.joined.communities
  );
  const [listOthers, setListOthers] = useState<{}[]>([]);
  useEffect(() => {
    getJoinedCommunities();
    getListOthers();
  }, []);

  async function getListOthers() {
    try {
      const res = await axios(
        "https://6316f6fdcb0d40bc4148114b.mockapi.io/khanhmacro/api/communities?p=1&l=4"
      );
      console.log("getListOthers: ", res.data[0]);
      setListOthers([...res.data]);
      // setLoading(false);
    } catch (e) {
      console.log("error: ", e);
      setListOthers([]);
    }
  }

  function getJoinedCommunities() {
    dispatch(getJoined());
  }

  // flatList
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderJoinedCommunity = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.containerItem}
        onPress={() =>
          navigation.navigate("CommunityDetailScreen", { community: item })
        }
      >
        <Image
          source={{ uri: item.image_url }}
          style={styles.imageJoinedCommunity}
        />
        <LinearGradient
          colors={["rgba(20, 13, 41, 0)", "rgba(20, 13, 40, 0.91)"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.457, 1]}
          style={[
            {
              position: "absolute",
              borderRadius: 16,
              height: 129,
              width: 210,
            },
          ]}
        />
        <Text style={styles.textItem}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={[]}
        renderItem={() => <></>}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View style={styles.viewHeader}>
              <Image
                source={require("../../../assets/png/avt.png")}
                style={styles.imageAvt}
              />
              <View>
                <Text style={styles.textHello} numberOfLines={2}>
                  Hello
                </Text>
                <Text style={styles.textName}>Matsuura Yuki</Text>
              </View>
            </View>
            <View style={styles.viewNotification}>
              <Image source={require("../../../assets/png/notifi.png")} />
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
              <FlatList
                data={joinedCommunities}
                keyExtractor={keyExtractor}
                renderItem={renderJoinedCommunity}
                horizontal
                style={styles.flatList}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        }
        ListFooterComponent={
          <FlatList
            data={listOthers}
            // initialNumToRender={4}
            renderItem={({ item }) => (
              <BaseCategory
                item={item}
                isShowTick={false}
                onPress={() =>
                  navigation.navigate("CommunityDetailScreen", {
                    community: item,
                  })
                }
              />
            )}
            keyExtractor={keyExtractor}
            ListHeaderComponent={<Text style={styles.textName}>Others</Text>}
            ListFooterComponent={
              <View>
                <BaseButton
                  title="See all"
                  IconRight={<CaretRight />}
                  backgroundColor={theme.colors.Neutral0}
                  color={theme.colors.primary}
                  onPress={() => navigation.navigate("CommunitiesStack")}
                />
                <View style={styles.viewButton}>
                  <BaseButton
                    title="Purchase TomoCoins"
                    backgroundColor={theme.colors.Neutral1}
                    color={theme.colors.Neutral10}
                    IconLeft={<TomoCoins style={{ marginHorizontal: 23 }} />}
                    style={styles.buttonGray}
                  />
                  <BaseButton
                    title="Introduce via Twitter"
                    backgroundColor={theme.colors.Neutral1}
                    color={theme.colors.Neutral10}
                    IconLeft={<ViaTwitter style={{ marginHorizontal: 23 }} />}
                    style={styles.buttonGray}
                  />
                  <BaseButton
                    title="Introduce via Facebook"
                    backgroundColor={theme.colors.Neutral1}
                    color={theme.colors.Neutral10}
                    IconLeft={<ViaFacebook style={{ marginHorizontal: 23 }} />}
                    style={styles.buttonGray}
                  />
                </View>
              </View>
            }
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
    //
    paddingHorizontal: 24,
    // paddingBottom: 84,
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
  viewButton: {
    marginBottom: 84,
  },
  buttonGray: {
    height: 68,
    marginTop: 12,
    justifyContent: "flex-start",
  },
  viewHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  textHello: {
    fontWeight: "400",
    fontSize: theme.fontSize.font18,
    color: theme.colors.Neutral6,
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
    // marginVertical: 4,
  },
  containerText: {
    marginLeft: 19,
    flex: 1,
  },
  flatList: {
    paddingVertical: 20,
  },
  imageAvt: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 20,
  },

  //item
  containerItem: {
    marginHorizontal: 6,
    height: 129,
    width: 210,
  },
  textItem: {
    position: "absolute",
    left: 20,
    bottom: 20,
    color: theme.colors.Neutral0,
    fontSize: theme.fontSize.font16,
    fontWeight: "600",
  },
  imageJoinedCommunity: {
    height: 129,
    width: 210,
    borderRadius: 16,
  },
});

export default HomeScreen;
