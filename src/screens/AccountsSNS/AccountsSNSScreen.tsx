import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  BaseAreaView,
  BaseButton,
  BaseGettingStarted,
  BaseIntroduction,
  ArrowRight,
  Plus,
} from "../../components";
import { theme } from "../../constants/index";

const colors = theme.colors;
const fontSize = theme.fontSize;

function AccountsSNSScreen({ navigation }: { navigation: any }) {
  return (
    <BaseAreaView style={styles.container}>
      <BaseGettingStarted
        flexRow
        titleScreen="Personal Introduction"
        titleStep="SNS accounts"
        comment="Up to 5 accounts"
        step={1}
      />
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
        IconRight={<ArrowRight stroke={colors.primary} />}
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
  textButtonAdd: {
    fontWeight: "400",
  },
});

export default AccountsSNSScreen;
