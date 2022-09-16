import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  BaseButton,
  BaseCategory,
  CaretRight,
  TomoCoins,
  ViaFacebook,
  ViaTwitter,
} from "../../components";
import { theme } from "../../constants";
import { getJoined, loginAuth, RootState } from "../../redux";

function HomeScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const joinedCommunities = useSelector(
    (state: RootState) => state.joined.communities
  );
  const user = useSelector((state: RootState) => state.auth.user);
  const [listOthers, setListOthers] = useState<{}[]>([]);
  useEffect(() => {
    getJoinedCommunities();
    getListOthers();
    dispatch(loginAuth());
  }, []);

  async function getListOthers() {
    try {
      const res = await axios(
        "https://6316f6fdcb0d40bc4148114b.mockapi.io/khanhmacro/api/communities?p=1&l=4"
      );
      setListOthers([...res.data]);
    } catch (e) {
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
          navigation.navigate("CommunityDetailScreen", {
            community: item,
            joined: true,
          })
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
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate("YourProfileScreen")}
              >
                <Image source={{ uri: user.avatar }} style={styles.imageAvt} />
              </TouchableOpacity>
              <View>
                <Text style={styles.textHello} numberOfLines={2}>
                  Hello
                </Text>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("YourProfileScreen")}
                >
                  <Text style={styles.textName}>{user.name}</Text>
                </TouchableOpacity>
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
                    onPress={() =>
                      navigation.navigate("PurchaseTomoCoinScreen")
                    }
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
