import { KeyboardAwareScrollViewProps } from "react-native-keyboard-aware-scroll-view";
import { PropsBaseHeader } from "../BaseHeader/BaseHeaderModel";

interface PropsBaseScrollView
  extends KeyboardAwareScrollViewProps,
    PropsBaseHeader {
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  children?: React.ReactNode;
  header?: boolean;
}

export type { PropsBaseScrollView };
