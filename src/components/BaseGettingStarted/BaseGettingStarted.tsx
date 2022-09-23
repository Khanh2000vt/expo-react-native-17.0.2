import { theme } from "@theme";
import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BaseGettingStartedProps } from "./BaseGettingStartedModel";
const colors = theme.colors;
const fontSize = theme.fontSize;
function BaseGettingStarted({
  titleScreen,
  titleStep,
  comment,
  step,
  flexRow,
  upto,
  indexUpto,
  showTitle = true,
}: BaseGettingStartedProps) {
  const textMore =
    upto !== undefined && indexUpto !== undefined && `- ${indexUpto}/${upto}`;
  return (
    <View>
      {showTitle && (
        <View>
          <Image source={require("@assets/png/LogoBlue.png")} />
          <Text style={styles.textIntro}>Getting started</Text>
          <Text style={[styles.textHeader, { marginTop: 5 }]}>
            {titleScreen}
          </Text>
        </View>
      )}
      {flexRow ? (
        <View style={styles.viewSNS}>
          <View style={styles.viewCircle}>
            <Text style={styles.textCircle}>{step}</Text>
          </View>
          <Text style={[styles.textHeader, styles.textTitle]}>{titleStep}</Text>
          {!!comment && (
            <Text style={[styles.textDescription, { marginLeft: 15 }]}>
              ({comment})
            </Text>
          )}
        </View>
      ) : (
        <View>
          <View style={[styles.viewSNS, { marginBottom: 0 }]}>
            <View style={styles.viewCircle}>
              <Text style={styles.textCircle}>{step}</Text>
            </View>
            <Text style={[styles.textHeader, styles.textTitle]}>
              {titleStep}
            </Text>
          </View>
          {!!comment && (
            <View style={[styles.viewSNS, { marginTop: 0, marginBottom: 23 }]}>
              <View style={{ width: 36, marginRight: 12 }} />
              <Text style={[styles.textDescription, { marginTop: 4 }]}>
                ({comment} {textMore})
              </Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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
  },
});

export default memo(BaseGettingStarted);
