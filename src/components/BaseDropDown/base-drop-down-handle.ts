import { LayoutRectangle } from "react-native";
import { Options } from "./enum";
import { getLayoutFlex } from "./option-handle";
function handleHeightDropDown(
  heightDropDown: number | undefined,
  lengthData: number,
  maxElementsShow: number,
  heightItem: number,
  offset: number = 10
) {
  let height: number;
  if (heightDropDown) {
    height = heightDropDown;
  } else {
    if (lengthData <= maxElementsShow) {
      height = lengthData * heightItem;
    } else {
      height = maxElementsShow * heightItem + offset;
    }
  }
  return height;
}
function handleDirectionDown(
  option: "top" | "bottom" | "left" | "right" | "default",
  layout: LayoutRectangle | undefined,
  windowWidth: number,
  windowHeight: number,
  widthDrop: number,
  heightDrop: number
): { top: number; left: number } {
  // if ()
  if (layout === undefined) {
    return { top: 0, left: 0 };
  }
  const value: Options = getLayoutFlex(
    option,
    layout,
    windowWidth,
    windowHeight,
    widthDrop,
    heightDrop
  );
  if (value === Options.TOP) {
    console.log("Option 1");
    return {
      top: layout.y - heightDrop,
      left: layout.x,
    };
  } else if (value === Options.BOTTOM) {
    console.log("Option 2");
    return {
      top: layout.y + layout.height,
      left: layout.x,
    };
  } else if (value === Options.LEFT) {
    console.log("Option 3");
    return {
      top: layout.y,
      left: layout.x - widthDrop,
    };
  } else if (value === Options.RIGHT) {
    console.log("Option 4");
    return {
      top: layout.y,
      left: layout.x + layout.width,
    };
  } else {
    console.log("Option 5");
    return {
      top: 0,
      left: 0,
    };
  }
}
export { handleDirectionDown, handleHeightDropDown };
