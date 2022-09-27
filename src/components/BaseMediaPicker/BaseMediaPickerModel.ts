import { IImage } from "@model";
export interface BaseMediaPickerProps {
  isVisible: boolean;
  onPickComplete: (result: IImage) => void;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  option?: "All" | "Images" | "Videos";
  allowsEditing?: boolean;
}
