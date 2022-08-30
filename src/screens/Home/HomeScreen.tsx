import React, { useCallback } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  BaseButton,
  BaseCommunities,
  TomoCoins,
  VectorRight,
  ViaFacebook,
  ViaTwitter,
} from "../../components";
import { theme } from "../../constants";
const { width, height } = Dimensions.get("window");
function HomeScreen({ navigation }: { navigation: any }) {
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.containerItem}>
        <Image source={require("../../../assets/png/typeReview.png")} />
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
        <Text style={styles.textItem}>Anime</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.viewHeader}>
          <View style={styles.viewAvatar}>
            <Image
              source={require("../../../assets/png/avt.png")}
              height={60}
              width={60}
            />
          </View>
          <View>
            <Text style={styles.textHello}>Hello</Text>
            <Text style={styles.textName}>Matsuura Yuki</Text>
          </View>
        </View>

        {/* <View style={styles.viewNotification}>
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
        </View> */}
        <Image
          source={require("../../../assets/png/News.png")}
          resizeMode="cover"
          width={width - 48}
          style={{ marginVertical: 36 }}
        />

        <View>
          <Text style={styles.textName}>Joined communities</Text>
          <FlatList
            data={dataTest}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            horizontal
            style={styles.flatList}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View>
          <Text>Others</Text>
          {dataTest.map((item, index) => {
            return (
              <BaseCommunities item={item} key={index} isShowTick={false} />
            );
          })}
          <BaseButton
            title="See all"
            IconRight={<VectorRight />}
            backgroundColor={theme.colors.Neutral0}
            color={theme.colors.primary}
          />
        </View>

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
      </ScrollView>
    </View>
  );
}

const dataTest = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //
    paddingHorizontal: 24,
    // paddingBottom: 84,
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
    // backgroundColor: "red",
  },
  viewButton: {
    marginBottom: 84,
  },
  buttonGray: {
    height: 68,
    marginTop: 12,
    justifyContent: "flex-start",
    // paddingHorizontal: 23,
  },
  viewHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewAvatar: {
    borderRadius: 30,
    marginRight: 20,
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
  },
  flatList: {
    paddingVertical: 20,
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
});

export default HomeScreen;
