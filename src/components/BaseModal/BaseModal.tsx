import React, { useCallback, useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ArrowDownIcon } from "@components/Icon";
import { ISelect } from "@model";
import { theme } from "@theme";
import Modal from "react-native-modal";
import { BaseModalProps } from "./BaseModalModel";
import RenderItem from "./components/RenderItem";

const colors = theme.colors;
const fontSize = theme.fontSize;

const getItemLayout = (
  _: Array<ISelect> | null | undefined,
  index: number
) => ({
  length: 58,
  offset: 58 * index,
  index,
});

function BaseModal({
  title,
  placeholder = "Select",
  data,
  onChangeValue,
  error,
  messageError,
  styleContainer,
  style,
  value,
  ...props
}: BaseModalProps) {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const refFlatList = useRef<FlatList>(null);
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  function handleSelectedItem(item: ISelect) {
    onChangeValue && onChangeValue(item.value);
    setModalVisible(false);
  }

  return (
    <View style={[styles.container, styleContainer]}>
      <Text style={styles.textTitle}>{title}</Text>
      <TouchableOpacity
        style={[styles.touchableOpacity, style]}
        activeOpacity={0.8}
        onPress={() => setModalVisible(true)}
        {...props}
      >
        <Text style={styles.textLabel}>
          {!!value
            ? data.find((element) => element.value === value)?.label
            : placeholder}
        </Text>
        <ArrowDownIcon />
      </TouchableOpacity>
      {error && !!messageError && (
        <Text style={styles.textError}>{messageError}</Text>
      )}
      <Modal
        isVisible={isModalVisible}
        onSwipeComplete={() => setModalVisible(false)}
        useNativeDriver
        useNativeDriverForBackdrop
        backdropOpacity={0.3}
        scrollOffset={1}
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        style={{ margin: 0, justifyContent: "flex-end" }}
        onModalWillShow={() =>
          refFlatList.current?.scrollToIndex({
            animated: false,
            index: !!value
              ? data.findIndex((element) => element.value === value)
              : 0,
            viewPosition: 0,
          })
        }
      >
        <View style={styles.containerModal}>
          <View style={styles.headerModal}>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textCancel}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bodyModal}>
            <FlatList
              data={data}
              renderItem={(props) => (
                <RenderItem
                  onPress={handleSelectedItem}
                  props={props}
                  value={value}
                />
              )}
              keyExtractor={keyExtractor}
              ref={refFlatList}
              showsVerticalScrollIndicator={false}
              decelerationRate="fast"
              getItemLayout={getItemLayout}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchableOpacity: {
    height: 58,
    backgroundColor: colors.colorInput,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 4,
  },
  containerModal: {
    backgroundColor: "#fff",
    flex: 0.5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  headerModal: {
    height: 40,
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "flex-end",
    borderBottomWidth: 1,
    borderColor: colors.Neutral3,
  },
  bodyModal: {
    // paddingVertical: 10,
    // marginVertical: 10,
    paddingBottom: 100,
  },
  textCancel: {
    color: colors.primary,
  },
  textError: {
    fontSize: 9,
    color: "red",
  },
  textTitle: {
    fontWeight: "500",
    fontSize: fontSize.font16,
    color: colors.Neutral4,
  },
  textLabel: {
    fontWeight: "400",
    fontSize: fontSize.font16,
    color: colors.Neutral10,
  },
  //item
  itemRenderContainer: {
    height: 58,
    borderBottomWidth: 1,
    borderColor: colors.Neutral3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});

export default BaseModal;
