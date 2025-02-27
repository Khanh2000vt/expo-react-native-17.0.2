import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  BaseAreaView,
  BaseButton,
  BaseOTP,
  Tick,
  VectorBack,
} from "@components";
import { theme } from "@theme";
import { getNameNextNavigation, getRandomCodeOTP } from "./controller";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LoginTabProps } from "@navigation";
import { SCREEN } from "@constant/index";
import * as Notifications from "expo-notifications";
type INavigation = LoginTabProps<SCREEN.OTP>;
const colors = theme.colors;
const fontSize = theme.fontSize;
function OTPScreen() {
  const navigation = useNavigation<INavigation["navigation"]>();
  const route = useRoute<INavigation["route"]>();
  const { type } = route.params;
  const nextNavigation = getNameNextNavigation(type);
  const [codeCurrent, setCodeCurrent] = useState<string>("");
  const [fakeOTP, setFakeOTP] = useState<string>(getRandomCodeOTP());

  useEffect(() => {
    console.log("fakeOTP: ", fakeOTP);
    schedulePushNotification();
  }, [fakeOTP]);

  async function schedulePushNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "OTP Code",
        body: "Your OTP code is: " + fakeOTP,
        // data: { data: "goes here" },
      },
      trigger: { seconds: 2 },
    });
  }

  function handleCodeFilled(value: string) {
    if (value === fakeOTP) {
      navigation.navigate(nextNavigation);
    }
  }

  console.log("codeCurrent: ", codeCurrent);

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
        onChangeCode={(code: string) => setCodeCurrent(code)}
        backgroundColor={colors.Neutral0}
      />
      <BaseButton
        title={"Verify"}
        IconRight={<Tick height={20} width={20} />}
        style={styles.baseButton}
        onPress={() => navigation.navigate(nextNavigation)}
      />
      <View style={styles.viewReceiveOTP}>
        <Text style={styles.textReceiveOTP}>Didn’t receive OTP code?</Text>
        <TouchableOpacity
          onPress={() => {
            setFakeOTP(getRandomCodeOTP());
          }}
          activeOpacity={0.8}
        >
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
