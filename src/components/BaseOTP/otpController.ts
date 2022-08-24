import {TextInput} from 'react-native';

function handleInputText(
  text: string,
  index: number,
  code: string[],
): string[] {
  let temp = code;
  temp[index] = text;
  return temp;
}

function handleRef(
  r: React.RefObject<TextInput>,
  i: number,
  ref: React.RefObject<TextInput>[],
) {
  let temp = ref;
  temp[i] = r;
  return temp;
}

function handleCodeFillFull(code: string[]): string {
  let string = code.join('');
  return string;
}

export {handleInputText, handleRef, handleCodeFillFull};
