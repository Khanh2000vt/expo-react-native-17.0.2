import { BaseButton, BaseInput } from "@components";
import { SCREEN } from "@constant/index";
import { LoginTabProps } from "@navigation";
import { useNavigation } from "@react-navigation/native";
import { updateUser } from "@redux";
import { theme } from "@theme";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { useDispatch } from "react-redux";
import {
  getValidateConfirmPassword,
  getValidateNewPassword,
} from "./controller";
type INav = LoginTabProps<SCREEN.RESET_PASSWORD>;

export interface IValidate {
  error: boolean;
  message: string | undefined;
}

const initValidate = {
  error: false,
  message: undefined,
};

function ResetPasswordScreen() {
  const dispatch = useDispatch();
  const navigation = useNavigation<INav["navigation"]>();
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [validateNew, setValidateNew] = useState<IValidate>(initValidate);
  const [validateConfirm, setValidateConfirm] =
    useState<IValidate>(initValidate);
  const disabled =
    validateNew.error ||
    validateConfirm.error ||
    newPassword.length === 0 ||
    confirmPassword.length === 0;

  const firstRenderedRef = useRef(false);
  useEffect(() => {
    if (firstRenderedRef.current) {
      handleValidateNewPassword();
    }
  }, [newPassword]);

  useEffect(() => {
    if (firstRenderedRef.current) {
      handleValidateConfirmPassword();
    } else {
      firstRenderedRef.current = true;
    }
  }, [confirmPassword]);

  const handleValidateNewPassword = () => {
    const error = getValidateNewPassword(newPassword);
    setValidateNew(error);
  };

  const handleValidateConfirmPassword = () => {
    const error = getValidateConfirmPassword(confirmPassword, newPassword);
    setValidateConfirm(error);
  };

  const handleReset = () => {
    const param = {
      password: newPassword,
    };
    dispatch(updateUser(param));
    navigation.navigate(SCREEN.SUCCESSFULLY);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>Reset Password</Text>
      <View style={styles.viewInput}>
        <BaseInput
          title="New Password"
          option="password"
          styleContainer={styles.distance}
          onChangeText={setNewPassword}
          value={newPassword}
          error={validateNew.error}
          messageError={validateNew.message}
        />
        <BaseInput
          title="Confirm New Password"
          option="password"
          styleContainer={[
            styles.distance,
            { opacity: newPassword.length !== 0 ? 1 : 0.3 },
          ]}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          error={validateConfirm.error}
          messageError={validateConfirm.message}
          editable={newPassword.length !== 0}
        />
      </View>

      <BaseButton title="Reset" onPress={handleReset} disabled={disabled} />
      <BaseButton
        title="Back to login"
        option="solid"
        style={styles.distance}
        onPress={() => navigation.popToTop()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.Neutral0,
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  textTitle: {
    fontSize: theme.fontSize.font28,
    fontWeight: "600",
    lineHeight: 38,
    color: theme.colors.Neutral10,
    textAlign: "center",
  },
  viewInput: {
    marginBottom: 71,
  },
  distance: {
    marginTop: 16,
  },
});

export default ResetPasswordScreen;
