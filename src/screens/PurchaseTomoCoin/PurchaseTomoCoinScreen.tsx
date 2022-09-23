import { theme } from "@theme";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  BaseButton,
  BaseHeader,
  CurrencyJpy,
  SvgInfo,
  VectorBack,
} from "../../components";
import { addCoins, RootState } from "../../redux";

function PurchaseTomoCoinScreen({ navigation }: { navigation: any }) {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const arrayButton = [
    {
      id: 1,
      tomoCoin: "1000",
      currencyJpy: "600",
      onPress: () => {
        dispatch(addCoins(1000));
      },
      icon: (
        <View style={styles.iconLeft}>
          <Image source={require("../../../assets/png/uiconsCoin.png")} />
        </View>
      ),
    },
    {
      id: 2,
      tomoCoin: "3000",
      currencyJpy: "1500",
      onPress: () => {
        dispatch(addCoins(3000));
      },
      icon: (
        <View style={styles.iconLeft}>
          <Image source={require("../../../assets/png/uiconsCoin2.png")} />
        </View>
      ),
    },
    {
      id: 3,
      tomoCoin: "5000",
      currencyJpy: "2300",
      onPress: () => {
        dispatch(addCoins(5000));
      },
      icon: (
        <View style={styles.iconLeft}>
          <Image source={require("../../../assets/png/uiconsCoin3.png")} />
        </View>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <BaseHeader
        title="Purchase TomoCoin"
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      <ScrollView style={styles.body}>
        <View>
          {arrayButton.map((button) => {
            return (
              <BaseButton
                key={button.id}
                onPress={button.onPress}
                title={
                  <Text>
                    {button.tomoCoin}
                    <Text style={styles.textTC}> tc</Text>
                  </Text>
                }
                style={styles.buttonStyle}
                styleText={styles.textButton}
                backgroundColor={theme.colors.colorInput}
                color={theme.colors.Semantic1}
                IconLeft={button.icon}
                IconRight={
                  <View style={styles.viewIconRight}>
                    <CurrencyJpy />
                    <Text style={styles.textCurrencyJpy}>
                      {"" + button.currencyJpy}
                    </Text>
                  </View>
                }
              />
            );
          })}
        </View>

        <View style={styles.viewCoinUser}>
          <Text style={styles.textTitle}>Your TomoCoin</Text>
          <Text style={styles.textBody}>Current count (tc)</Text>
          <View style={styles.viewCoinCurrent}>
            <Text style={styles.textCoinCurrent}>{user.coin}</Text>
          </View>
        </View>

        <View>
          <View style={styles.viewFlex}>
            <SvgInfo stroke={theme.colors.Neutral10} />
            <Text style={[styles.textTitle, { marginLeft: 12 }]}>
              Rules and terms
            </Text>
          </View>
          <Text style={styles.textRules}>
            掲示板投稿＝５tm、メール送信＝10tm、申請＝５0tm、承認＝５0tm申請は相手に承認された場合に消費。申請後３日以内に承認されなければ返還されます。掲示板投稿、メール、申請はTM保有数を限度とする。TMが５0無いと相手からの申請を承認できません。退会の場合、一切の返金はありませんのでご了承ください。
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Neutral0,
    flex: 1,
  },
  styleHeader: {
    paddingHorizontal: 33,
    marginTop: 80,
  },
  body: {
    paddingHorizontal: 24,
    paddingTop: 27,
    paddingBottom: 44,
  },
  buttonStyle: {
    height: undefined,
    paddingVertical: 26,
    paddingLeft: 11,
    paddingRight: 28,
    marginBottom: 16,
    justifyContent: "space-between",
  },
  textButton: {
    flex: 1,
    textAlign: "left",
    fontWeight: "700",
    lineHeight: 27.24,
    fontSize: theme.fontSize.font20,
  },
  viewIconRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTC: {
    fontWeight: "500",
  },
  textCurrencyJpy: {
    fontSize: theme.fontSize.font16,
    fontWeight: "600",
    lineHeight: 21.79,
    color: theme.colors.Neutral8,
  },
  iconLeft: {
    width: 42,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: theme.fontSize.font24,
    fontWeight: "600",
    color: theme.colors.Neutral10,
    lineHeight: 32.69,
  },
  textBody: {
    fontSize: theme.fontSize.font16,
    fontWeight: "500",
    lineHeight: 21.79,
    color: theme.colors.Neutral6,
    marginTop: 4,
    marginBottom: 16,
  },
  viewCoinUser: {
    marginTop: 24,
    marginBottom: 40,
  },
  viewCoinCurrent: {
    paddingVertical: 18,
    backgroundColor: theme.colors.Neutral0,
    borderWidth: 1,
    borderColor: theme.colors.Neutral3,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  textCoinCurrent: {
    fontSize: theme.fontSize.font36,
    lineHeight: 49.03,
    fontWeight: "600",
    color: theme.colors.Semantic1,
  },
  viewFlex: {
    flexDirection: "row",
    alignItems: "center",
  },
  textRules: {
    fontSize: theme.fontSize.font16,
    fontWeight: "400",
    color: theme.colors.Neutral6,
    lineHeight: 22,
    marginTop: 16,
  },
});

export default PurchaseTomoCoinScreen;
