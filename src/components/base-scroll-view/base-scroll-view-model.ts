import { KeyboardAwareScrollViewProps } from "react-native-keyboard-aware-scroll-view";

interface PropsBaseScrollView extends KeyboardAwareScrollViewProps {
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  children?: React.ReactNode;
}

export type { PropsBaseScrollView };
