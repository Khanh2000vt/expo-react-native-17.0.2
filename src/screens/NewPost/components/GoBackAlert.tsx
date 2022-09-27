import { Alert } from "react-native";
const GoBackAlert = (
  onAgreeSavePost: () => void,
  onCancelSavePost: () => void
) => {
  return Alert.alert("Warning", "Save to draft ?", [
    {
      text: "Yes",
      onPress: onAgreeSavePost,
    },
    {
      text: "No",
      onPress: onCancelSavePost,
      style: "destructive",
    },
    {
      text: "Cancel",
      onPress: () => {},
      style: "cancel",
    },
  ]);
};

export default GoBackAlert;
