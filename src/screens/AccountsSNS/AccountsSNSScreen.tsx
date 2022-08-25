import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import LogoBlue from "../../../assets/svg/LogoBlue.svg";
import Plus from "../../../assets/svg/Plus.svg";
import ArrowRight from "../../../assets/svg/ArrowRight.svg";
import BaseAreaView from "../../components/BaseAreaView/BaseAreaView";
import BaseButton from "../../components/BaseButton/BaseButton";
import BaseIntroduction from "../../components/BaseIntroduction/BaseIntroduction";
import { theme } from "../../constants/index";

const colors = theme.colors;
const fontSize = theme.fontSize;

function AccountsSNSScreen({ navigation }: { navigation: any }) {
  return (
    <BaseAreaView style={styles.container}>
      <LogoBlue />
      <Text style={styles.textIntro}>Getting started</Text>
      <Text style={[styles.textHeader, { marginTop: 5 }]}>
        Personal Introductions
      </Text>
      <View style={styles.viewSNS}>
        <View style={styles.viewCircle}>
          <Text style={styles.textCircle}>1</Text>
        </View>
        <Text style={[styles.textHeader, styles.textTitle]}>SNS accounts</Text>
        <Text style={styles.textDescription}>{"(Up to 5 accounts)"}</Text>
      </View>
      <View style={styles.viewBody}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          {Array(2)
            .fill(0)
            .map((_, index) => {
              return <BaseIntroduction key={index} />;
            })}
          <BaseButton
            title="Add New Address"
            option="solid"
            color={colors.Neutral4}
            style={styles.buttonAdd}
            styleText={styles.textButtonAdd}
            IconLeft={<Plus />}
            onPress={() => {}}
          />
        </ScrollView>
      </View>
      <BaseButton
        title="Next"
        option="solid"
        color={colors.primary}
        IconRight={<ArrowRight fill={colors.primary} stroke={colors.primary} />}
        onPress={() => navigation.navigate("CommunitiesScreen")}
      />
    </BaseAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  viewText: {
    flexDirection: "row",
    backgroundColor: "red",
    alignItems: "center",
  },
  viewSNS: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 36,
  },
  viewCircle: {
    width: 36,
    height: 36,
    marginRight: 12,
    backgroundColor: colors.Neutral8,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  viewBody: {
    flex: 1,
  },
  scrollView: {
    paddingBottom: 20,
  },
  buttonAdd: {
    borderStyle: "dashed",
    height: 58,
  },
  textIntro: {
    fontWeight: "500",
    fontSize: fontSize.font18,
    color: colors.Neutral8,
    marginTop: 32,
  },
  textHeader: {
    fontWeight: "600",
    fontSize: fontSize.font28,
    color: colors.Neutral10,
    //
  },
  textCircle: {
    color: "#fff",
    fontWeight: "600",
    fontSize: fontSize.font18,
  },
  textTitle: {
    fontSize: fontSize.font18,
  },
  textDescription: {
    fontWeight: "500",
    fontSize: fontSize.font14,
    color: colors.Neutral4,
    marginLeft: 15,
  },
  textButtonAdd: {
    fontWeight: "400",
  },
});

export default AccountsSNSScreen;
