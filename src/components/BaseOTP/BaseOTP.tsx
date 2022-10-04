import React, { useRef, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import InputOTP from "./components/OtpInput";
import {
  handleArrayToString,
  handleInputText,
  handleRef,
} from "./otpController";
import { PropsOTP } from "./BaseOTPModel";

function BaseOTP({
  pinCount = 4,
  onCodeFilled,
  type = "otp",
  clearInputs = false,
  styleInputOTP,
  styleViewOTP,
  styleContainerOTP,
  backgroundColor = "#f0f0f0",
  styleInputHighlight,
  onChangeCode,
}: PropsOTP) {
  const rerTemp = useRef<TextInput>();
  const arrayRef = new Array(pinCount).fill(rerTemp);
  const array = new Array(pinCount).fill("");
  //state
  const [code, setCode] = useState<string[]>(array);
  const [ref, setRef] = useState<React.RefObject<TextInput>[]>(arrayRef);
  const [indexFocused, setIndexFocused] = useState<number>(0);
  //function

  function clearAllCode() {
    setCode(array);
    onChangeCode && onChangeCode("");
  }

  function handleChangeText(text: string, index: number): void {
    if (text === "") {
      handleDeleteText(text, index);
    } else {
      handleAddText(text, index);
    }
  }

  function handleAddText(text: string, index: number) {
    if (index !== pinCount - 1) {
      let afterIndex = index + 1;
      ref[afterIndex].current?.focus();
      setIndexFocused(afterIndex);
    } else {
      Keyboard.dismiss();
    }
    const temp = handleInputText(text, index, code);
    setCode([...temp]);
    onChangeCode && onChangeCode(handleArrayToString(temp));
    if (index === pinCount - 1) {
      if (onCodeFilled) {
        let codeFillFull = handleArrayToString(code);
        onCodeFilled(codeFillFull);
      }
    }
  }

  function handleDeleteText(text: string, index: number) {
    if (index !== 0 && index !== pinCount - 1) {
      let preIndex = index - 1;
      ref[preIndex].current?.focus();
      setIndexFocused(preIndex);
    }
    const temp = handleInputText(text, index, code);
    setCode([...temp]);
    onChangeCode && onChangeCode(handleArrayToString(temp));
  }

  function handleLayout(refLayout: React.RefObject<TextInput>, index: number) {
    const refInput = handleRef(refLayout, index, ref);
    setRef([...refInput]);
  }

  function handlePressFeedback() {
    if (clearInputs) {
      clearAllCode();
      ref[0].current?.focus();
      setIndexFocused(0);
    } else {
      let filledCount = code.filter((item) => {
        return item !== "";
      }).length;
      let continueFill = Math.min(filledCount, pinCount - 1);
      ref[continueFill].current?.focus();
    }
  }

  function handleKeyPress(key: string, text: string, index: number) {
    if (text === "" || text === undefined) {
      if (key === "Backspace") {
        if (index !== 0) {
          let temp = index - 1;
          ref[temp].current?.focus();
          setIndexFocused(temp);
        }
        const temp = handleInputText("", index - 1, code);
        setCode([...temp]);
        onChangeCode && onChangeCode(handleArrayToString(temp));
      }
    }
  }
  return (
    <View style={[styleViewOTP, { backgroundColor: backgroundColor }]}>
      <TouchableWithoutFeedback onPress={handlePressFeedback}>
        <View style={[styles.view, styleContainerOTP]}>
          {array.map((_, index) => {
            return (
              <InputOTP
                key={index}
                codeChar={code[index]}
                index={index}
                type={type}
                styleInputHighlight={styleInputHighlight}
                styleInputOTP={styleInputOTP}
                focused={indexFocused === index}
                backgroundColor={backgroundColor}
                onTextChange={handleChangeText}
                onLayout={handleLayout}
                onKeyPress={handleKeyPress}
              />
            );
          })}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  view: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default BaseOTP;
