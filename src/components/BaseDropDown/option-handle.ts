import { LayoutRectangle } from "react-native";
import { Options } from "./enum";

function getLayoutFlex(
  option: "top" | "bottom" | "left" | "right" | "default",
  layout: LayoutRectangle,
  windowWidth: number,
  windowHeight: number,
  widthDrop: number,
  heightDrop: number
): Options {
  const distanceHeight = windowHeight - (layout.y + layout.height);
  const distanceWidth = windowWidth - (layout.x + layout.width);
  if (option === "top") {
    return handleTop(layout, distanceHeight, heightDrop);
  } else if (option === "left") {
    return handleLeft(layout, distanceWidth, widthDrop);
  } else if (option === "right") {
    return handleRight(layout, distanceWidth, widthDrop);
  } else {
    return handleBottom(layout, distanceHeight, heightDrop);
  }
}

function handleTop(
  layout: LayoutRectangle,
  distanceHeight: number,
  heightDrop: number
): Options {
  return heightDrop > layout.y && heightDrop < distanceHeight
    ? Options.BOTTOM
    : Options.TOP;
}

function handleLeft(
  layout: LayoutRectangle,
  distanceWidth: number,
  widthDrop: number
): Options {
  return widthDrop > layout.x && widthDrop < distanceWidth
    ? Options.RIGHT
    : Options.LEFT;
}

function handleRight(
  layout: LayoutRectangle,
  distanceWidth: number,
  widthDrop: number
) {
  return widthDrop < layout.x && widthDrop > distanceWidth
    ? Options.LEFT
    : Options.RIGHT;
}

function handleBottom(
  layout: LayoutRectangle,
  distanceHeight: number,
  heightDrop: number
) {
  return heightDrop < layout.y && heightDrop > distanceHeight
    ? Options.TOP
    : Options.BOTTOM;
}
export { getLayoutFlex };
