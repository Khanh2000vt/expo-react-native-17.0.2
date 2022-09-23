import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { BaseButton, CircleComplete } from "../../components";
import { Navigation, theme } from "../../constant";

const colors = theme.colors;
const fontSize = theme.fontSize;

function SuccessfullyScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <CircleComplete style={styles.circleComplete} />
      <Text style={styles.text}>
        Your password has been reset successfully!
      </Text>
      <BaseButton
        title="Back to login"
        option="solid"
        style={styles.button}
        onPress={() => navigation.navigate(Navigation.LOGIN)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.Neutral0,
    justifyContent: "center",
    paddingLeft: 24,
    paddingRight: 23,
  },
  circleTick: {
    width: 90,
    height: 90,
    backgroundColor: colors.primary,
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  circleComplete: {
    alignSelf: "center",
  },
  text: {
    fontSize: fontSize.font18,
    color: colors.Neutral6,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 31,
  },
  button: {
    marginTop: 48,
  },
});

export default SuccessfullyScreen;
