import React, { useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { PropsInputOTP } from "../BaseOTPModel";
enum TypeEnum {
  PASSWORD = "password",
  OTP = "otp",
}
function InputOTP({
  codeChar,
  index,
  onTextChange,
  onLayout,
  onKeyPress,
  type,
  styleInputOTP,
  backgroundColor,
  styleInputHighlight,
  focused,
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
          type === TypeEnum.PASSWORD && { color: backgroundColor },
          focused && styleInputHighlight,
        ]}
        value={codeChar}
        onChangeText={(text) => onTextChange(text, index)}
        onLayout={() => onLayout(refInput, index)}
        autoFocus={index === 0}
        onKeyPress={({ nativeEvent }) =>
          onKeyPress(nativeEvent.key, codeChar, index)
        }
        caretHidden
      />
      {type === TypeEnum.PASSWORD && (
        <View style={[styles.circle, codeChar !== "" && styles.circleFilled]} />
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
});

export default InputOTP;
