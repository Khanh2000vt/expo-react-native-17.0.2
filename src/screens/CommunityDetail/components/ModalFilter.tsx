import { theme } from "@theme";
import React, { forwardRef } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { BaseButton, Tick } from "../../../components";
import { listCheckBox } from "../constants";
interface IState {
  isVisible: boolean;
  onPressCancelModal: () => void | undefined;
  onChangeMinAge: (text: string) => void;
  onChangeMaxAge: (text: string) => void;
  onPressClearModal: () => void | undefined;
  onPressGender: (item: any) => void;
  valueMinAge: string;
  valueMaxAge: string;
  onPressApply: (item: any) => void;
  genderSelected: string;
}
function ModalFilter(
  {
    isVisible,
    onPressCancelModal,
    onChangeMinAge,
    onChangeMaxAge,
    onPressClearModal,
    onPressGender,
    valueMinAge,
    valueMaxAge,
    onPressApply,
    genderSelected,
  }: IState,
  ref: React.ForwardedRef<TextInput>
) {
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={onPressCancelModal}
      useNativeDriver={false}
      useNativeDriverForBackdrop
      backdropOpacity={0}
      // scrollOffset={1}
      onBackButtonPress={onPressCancelModal}
      onBackdropPress={onPressCancelModal}
      style={{ margin: 0, justifyContent: "center" }}
      swipeDirection={"down"}
    >
      <View style={styles.modalContainer}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Age Modal */}
          <Text style={styles.modalTitle}>Age</Text>
          <View style={styles.viewInputModal}>
            <TextInput
              ref={ref}
              style={styles.textInputModal}
              keyboardType="number-pad"
              maxLength={3}
              onChangeText={onChangeMinAge}
              value={valueMinAge}
            />
            <View style={styles.lineModal} />
            <TextInput
              ref={ref}
              style={styles.textInputModal}
              keyboardType="number-pad"
              maxLength={3}
              onChangeText={onChangeMaxAge}
              value={valueMaxAge}
            />
          </View>
          {/* Gender Modal */}
          <>
            <Text style={styles.modalTitle}>Gender</Text>
            {listCheckBox.map((item, _index) => {
              const isSelected = genderSelected === item.value;
              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.modalItem}
                  onPress={() => onPressGender(item)}
                >
                  <View
                    style={[
                      styles.modalCheckIcon,
                      isSelected && { backgroundColor: theme.colors.primary },
                    ]}
                  >
                    {isSelected && <Tick />}
                  </View>
                  <Text style={styles.textCheckBox}>{item.label}</Text>
                </TouchableOpacity>
              );
            })}
          </>
          <View style={{ flexDirection: "row" }}>
            <BaseButton
              title="Apply"
              style={[styles.buttonModal, { marginRight: 10.5 }]}
              // disabled
              onPress={onPressApply}
            />
            <BaseButton
              title="Clear"
              option="solid"
              style={[styles.buttonModal, styles.buttonModalRight]}
              backgroundColor={theme.colors.Neutral8}
              color={theme.colors.Neutral4}
              onPress={onPressClearModal}
            />
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

export default forwardRef<TextInput, IState>(ModalFilter);

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: theme.colors.Neutral8,
    borderRadius: 8,
    marginHorizontal: 24,
    paddingTop: 31,
    paddingHorizontal: 32,
    paddingBottom: 36,
  },
  viewInputModal: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
  },
  textInputModal: {
    flex: 1,
    backgroundColor: theme.colors.Neutral6,
    paddingHorizontal: 32,
    borderRadius: 8,
    height: 58,
    color: theme.colors.Neutral0,
    fontSize: theme.fontSize.font18,
    fontWeight: "600",
  },
  lineModal: {
    width: 16,
    height: 2,
    backgroundColor: theme.colors.Neutral6,
    marginHorizontal: 17.61,
  },
  modalTitle: {
    color: theme.colors.Neutral0,
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    marginBottom: 16,
  },
  modalItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    width: "60%",
  },
  modalCheckIcon: {
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.Neutral6,
    borderRadius: 8,
    marginRight: 12,
  },
  textCheckBox: {
    fontWeight: "400",
    fontSize: theme.fontSize.font18,
    color: theme.colors.Neutral0,
  },
  buttonModal: {
    flex: 1,
    height: 51,
  },
  buttonModalRight: {
    marginLeft: 10.5,
    borderColor: theme.colors.Neutral4,
  },
});

// export default ModalFilter;
