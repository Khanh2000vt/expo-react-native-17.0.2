import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  BaseAreaView,
  BaseButton,
  BaseGettingStarted,
  BaseIntroduction,
  ArrowRight,
  Plus,
} from "../../components";
import { SCREEN } from "@constant/index";
import { propsGettingStated } from "./constants";
import { Title } from "./enum";
import { theme } from "@theme";
import { useNavigation } from "@react-navigation/native";
import { LoginTabProps } from "@navigation";

const colors = theme.colors;
const fontSize = theme.fontSize;

function AccountsSNSScreen() {
  const navigation =
    useNavigation<LoginTabProps<SCREEN.ACCOUNTS_SNS>["navigation"]>();
  const [listAccount, setListAccount] = useState<number[]>(Array(0).fill(0));

  return (
    <BaseAreaView style={styles.container}>
      <BaseGettingStarted {...propsGettingStated} />
      <View style={styles.viewBody}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {listAccount.map((_, index) => {
            return <BaseIntroduction key={index} />;
          })}
          {listAccount.length < 5 && (
            <BaseButton
              title={Title.ADD_NEW_ADDRESS}
              option="solid"
              color={colors.Neutral4}
              style={styles.buttonAdd}
              styleText={styles.textButtonAdd}
              IconLeft={<Plus />}
              onPress={() => setListAccount(listAccount.concat([0]))}
            />
          )}
        </ScrollView>
      </View>
      <BaseButton
        title={Title.NEXT}
        option="solid"
        color={colors.primary}
        IconRight={<ArrowRight stroke={colors.primary} />}
        onPress={() => navigation.navigate(SCREEN.PICK_PREFER)}
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
