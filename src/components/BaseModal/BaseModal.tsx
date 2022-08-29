import React, { useCallback, useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";
import { theme } from "../../constants/index";
import { ArrowDownIcon, Tick } from "../Icon";
import { BaseModalProps } from "./BaseModalModel";

const colors = theme.colors;
const fontSize = theme.fontSize;

function BaseModal({
  title,
  placeholder = "Select",
  data,
  onChangeValue,
  error,
  messageError,
  styleContainer,
  style,
  ...props
}: BaseModalProps) {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [indexSelected, setIndexSelected] = useState<number>(-1);
  const refFlatList = useRef<FlatList>(null);
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <TouchableOpacity
        style={styles.itemRenderContainer}
        activeOpacity={0.5}
        onPress={() => handleSelectedItem(item, index)}
      >
        <Text>{item.label}</Text>
        {index === indexSelected && <Tick stroke={colors.primary} />}
      </TouchableOpacity>
    );
  };

  function handleSelectedItem(item: any, index: number) {
    onChangeValue && onChangeValue(item.value);
    setIndexSelected(index);
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
          {indexSelected !== -1 ? data[indexSelected].label : placeholder}
        </Text>
        <ArrowDownIcon />
      </TouchableOpacity>
      {error && <Text style={styles.textError}>{messageError}</Text>}
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
            index: indexSelected !== -1 ? indexSelected : 0,
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
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              ref={refFlatList}
              showsVerticalScrollIndicator={false}
              decelerationRate="fast"
              getItemLayout={(_, index) => ({
                length: 58,
                offset: 58 * index,
                index,
              })}
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
