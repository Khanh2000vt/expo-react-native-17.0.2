import React, { memo, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Eye, EyeSlash, MagnifyingGlass, SlidersHorizontal } from "@components";
import { Input } from "@constant/index";
import { theme } from "@theme";
import { PropsBaseInput } from "./BaseInputModel";
const colors = theme.colors;
const fontSize = theme.fontSize;

enum Option {
  SEARCH = "search",
  PASSWORD = "password",
  DEFAULT = "default",
  SEARCH_FILTER = "search-filter",
}

function BaseInput({
  title,
  option = Option.DEFAULT,
  style,
  styleContainer,
  error,
  messageError,
  styleTitle,
  styleBody,
  onPressFilter,
  ...props
}: PropsBaseInput) {
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  return (
    <View style={styleContainer}>
      {!!title && <Text style={[styles.text, styleTitle]}>{title}</Text>}
      <View
        style={[
          styles.viewInput,
          styleBody,
          {
            paddingHorizontal:
              option === Option.SEARCH || option === Option.SEARCH_FILTER
                ? 16
                : 0,
          },
          { paddingRight: option === Option.DEFAULT ? 16 : 0 },
        ]}
      >
        {(option === Option.SEARCH || option === Option.SEARCH_FILTER) && (
          <View>
            <MagnifyingGlass />
          </View>
        )}
        <TextInput
          style={[styles.textInput, style]}
          secureTextEntry={hidePassword && option === Option.PASSWORD}
          {...props}
        />
        {option === Option.PASSWORD && (
          <TouchableOpacity
            style={styles.viewIcon}
            onPress={() => setHidePassword(!hidePassword)}
          >
            {hidePassword ? (
              <EyeSlash height={24} width={24} />
            ) : (
              <Eye height={24} width={24} />
            )}
          </TouchableOpacity>
        )}
        {option === Option.SEARCH_FILTER && (
          <TouchableOpacity style={styles.viewIcon} onPress={onPressFilter}>
            <SlidersHorizontal height={28} width={28} />
          </TouchableOpacity>
        )}
      </View>
      {error && !!messageError && (
        <Text style={styles.textError}>{messageError}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  viewInput: {
    backgroundColor: colors.colorInput,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    height: Input.HEIGHT,
    marginTop: 4,
  },
  viewIcon: {
    paddingHorizontal: 16,
    paddingVertical: 17,
  },
  textInput: {
    flex: 1,
    height: Input.HEIGHT,
    paddingLeft: 16,
  },
  text: {
    fontWeight: "500",
    color: colors.Neutral4,
    fontSize: fontSize.font16,
  },
  //set test text
  textError: {
    fontSize: 9,
    color: "red",
  },
});

export default memo(BaseInput);
