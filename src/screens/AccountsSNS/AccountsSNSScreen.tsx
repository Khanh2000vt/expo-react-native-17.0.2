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
import { Navigation, theme } from "../../constants";
import { propsGettingStated } from "./constants";
import { Title } from "./enum";

const colors = theme.colors;
const fontSize = theme.fontSize;

function AccountsSNSScreen({ navigation }: { navigation: any }) {
  return (
    <BaseAreaView style={styles.container}>
      <BaseGettingStarted {...propsGettingStated} />
      <View style={styles.viewBody}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {Array(2)
            .fill(0)
            .map((_, index) => {
              return <BaseIntroduction key={index} />;
            })}
          <BaseButton
            title={Title.ADD_NEW_ADDRESS}
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
        title={Title.NEXT}
        option="solid"
        color={colors.primary}
        IconRight={<ArrowRight stroke={colors.primary} />}
        onPress={() => navigation.navigate(Navigation.PICK_PREFER)}
      />
    </BaseAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
