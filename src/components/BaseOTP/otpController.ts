import { TextInput } from "react-native";

function handleInputText(
  text: string,
  index: number,
  code: string[]
): string[] {
  let temp = code;
  temp[index] = text;
  return temp;
}

function handleRef(
  refLayout: React.RefObject<TextInput>,
  index: number,
  ref: React.RefObject<TextInput>[]
) {
  let temp = ref;
  temp[index] = refLayout;
  return temp;
}

function handleArrayToString(code: string[]): string {
  let string = code.join("");
  return string;
}

export { handleInputText, handleRef, handleArrayToString };
