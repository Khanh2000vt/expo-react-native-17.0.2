import * as ImagePicker from "expo-image-picker";
export interface BaseMediaPickerProps {
  isVisible: boolean;
  onPickComplete: (result: ImagePicker.ImagePickerResult) => void;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  option?: "All" | "Images" | "Videos";
  allowsEditing?: boolean;
}
