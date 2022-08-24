import React, { useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { PropsInputOTP } from "../otpModel";

function InputOTP({
  code,
  index,
  onTextChange,
  onLayout,
  onKeyPress,
  type,
  styleInputOTP,
  backgroundColor,
}: PropsInputOTP) {
  const refInput = useRef<TextInput>(null);
  return (
    <View pointerEvents="none">
      <TextInput
        ref={refInput}
        keyboardType="number-pad"
        maxLength={1}
        style={[
          styles.textInput,
          styleInputOTP,
          type === "password" && { color: backgroundColor },
        ]}
        value={code[index]}
        onChangeText={(text) => onTextChange(text, index)}
        onLayout={() => onLayout(refInput, index)}
        autoFocus={index === 0}
        onKeyPress={({ nativeEvent }) =>
          onKeyPress(nativeEvent.key, code[index], index)
        }
        caretHidden
      />
      {type === "password" && (
        <View
          style={[
            styles.circle,
            code[index] !== "" ? styles.circleFilled : styles.circleNot,
          ]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    textAlignVertical: "bottom",
    textAlign: "center",
  },
  circle: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderRadius: 8,
    position: "absolute",
    top: 10,
    left: 10,
  },
  circleFilled: {
    backgroundColor: "#000",
  },
  circleNot: {},
});

export default InputOTP;
