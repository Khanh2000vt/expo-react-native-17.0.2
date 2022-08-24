import React, { useRef, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import InputOTP from "./components/otpInput";
import {
  handleCodeFillFull,
  handleInputText,
  handleRef,
} from "./otpController";
import { PropsOTP } from "./otpModel";

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
  }

  function handleChangeText(text: string, index: number): void {
    console.log("text", text, index);
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
      // setIndexFocused(afterIndex);
    } else {
      Keyboard.dismiss();
    }
    const temp = handleInputText(text, index, code);
    setCode([...temp]);
    if (index === pinCount - 1) {
      if (onCodeFilled) {
        let codeFillFull = handleCodeFillFull(code);
        onCodeFilled(codeFillFull);
      }
    }
  }

  function handleDeleteText(text: string, index: number) {
    console.log("index:", index);
    if (index !== 0 && index !== pinCount - 1) {
      console.log("test vao day ");
      let preIndex = index - 1;
      ref[preIndex].current?.focus();
    }
    const temp = handleInputText(text, index, code);
    setCode([...temp]);
  }

  function handleLayout(r: any, i: number) {
    const refInput = handleRef(r, i, ref);
    setRef([...refInput]);
  }

  function handlePressFeedback() {
    if (clearInputs) {
      clearAllCode();
      ref[0].current?.focus();
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
                code={code}
                index={index}
                onTextChange={handleChangeText}
                onLayout={handleLayout}
                onKeyPress={handleKeyPress}
                type={type}
                styleInputOTP={styleInputOTP}
                indexFocused={indexFocused}
                backgroundColor={backgroundColor}
                styleInputHighlight={styleInputHighlight}
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
