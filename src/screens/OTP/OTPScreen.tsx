import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { theme } from "../../constants/index";
import BaseAreaView from "../../components/BaseAreaView/BaseAreaView";
import BaseOTP from "../../components/BaseOTP/BaseOTP";
import BaseButton from "../../components/BaseButton/BaseButton";
import VectorBack from "../../../assets/svg/VectorBack.svg";
import Tick from "../../../assets/svg/Tick.svg";
const colors = theme.colors;
const fontSize = theme.fontSize;
function OTPScreen({ navigation }: { navigation: any }) {
  function handleCodeFilled(value: string) {
    console.log("value: ", value);
    navigation.navigate("AccountsSNSScreen");
  }
  return (
    <BaseAreaView
      style={styles.container}
      header={true}
      IconLeft={<VectorBack />}
      onPressLeft={() => navigation.goBack()}
      styleHeader={styles.styleHeader}
      scroll
    >
      <Text style={styles.textTitle}>Verification Code</Text>
      <Text style={styles.textInfo}>
        Enter the OTP code from the phone we just sent you.
      </Text>
      <BaseOTP
        pinCount={4}
        type="otp"
        styleViewOTP={styles.styleViewOTP}
        styleInputOTP={styles.styleInputOTP}
        styleContainerOTP={styles.styleContainerOTP}
        styleInputHighlight={styles.styleInputHighlight}
        onCodeFilled={handleCodeFilled}
        backgroundColor={colors.Neutral0}
      />
      <BaseButton
        title={"Verify"}
        IconRight={<Tick height={20} width={20} />}
        style={styles.baseButton}
        onPress={() => {
          navigation.navigate("PersonalIntroductionScreen");
        }}
      />
      <View style={styles.viewReceiveOTP}>
        <Text style={styles.textReceiveOTP}>Didn’t receive OTP code?</Text>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.8}>
          <Text style={[styles.textReceiveOTP, styles.textResend]}>
            {" Resend"}
          </Text>
        </TouchableOpacity>
      </View>
    </BaseAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 130,
  },
  styleHeader: {
    height: 50,
    paddingHorizontal: 33,
  },
  styleViewOTP: {
    width: "100%",
  },
  styleContainerOTP: {
    justifyContent: "space-evenly",
  },
  styleInputOTP: {
    borderWidth: 0,
    borderBottomWidth: 2,
    color: "#000",
    borderColor: "#5A636D",
    fontSize: fontSize.font24,
    height: 65,
    width: 65,
    paddingBottom: 8,
  },
  baseButton: {
    marginTop: 33,
    marginBottom: 24,
  },
  viewReceiveOTP: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textTitle: {
    fontWeight: "600",
    fontSize: fontSize.font28,
    color: colors.Neutral10,
    textAlign: "center",
  },
  textInfo: {
    fontWeight: "500",
    fontSize: fontSize.font14,
    color: colors.Neutral3,
    marginHorizontal: 82,
    marginVertical: 6,
    textAlign: "center",
  },
  textReceiveOTP: {
    fontWeight: "400",
    fontSize: fontSize.font16,
    color: colors.Neutral8,
  },
  textResend: {
    fontWeight: "600",
    color: colors.primary,
  },
  styleInputHighlight: {
    borderColor: colors.primary,
  },
});

export default OTPScreen;
