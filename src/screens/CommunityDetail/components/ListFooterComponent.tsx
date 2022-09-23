import React, { useCallback } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { BaseMember } from "../../../components";

interface IState {
  isLoading: boolean;
  data: any[];
  onPress: (item: any) => void;
}

function ListFooterComponent({ isLoading, data, onPress }: IState) {
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  if (isLoading) {
    return (
      <View style={{ paddingBottom: 40 }}>
        <ActivityIndicator />
      </View>
    );
  }
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <BaseMember item={item} onPress={() => onPress(item)} />
      )}
      keyExtractor={keyExtractor}
      ListEmptyComponent={<Text>Empty</Text>}
    />
  );
}

export default ListFooterComponent;
