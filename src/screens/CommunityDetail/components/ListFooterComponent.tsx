import { MembersApi } from "@api";
import { BaseMember } from "@components";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import FindComponent from "./FindComponent";

interface IState {
  onPress: (item: any) => void;
  onFocus: (y: number) => void;
}

function ListFooterComponent({ onPress, onFocus }: IState) {
  const [members, setMembers] = useState<any[]>([]);
  const [filterMembers, setFilterMembers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [layoutY, setLayoutY] = useState<number>(0);

  useEffect(() => {
    getMembers();
  }, []);

  const getMembers = async () => {
    try {
      const res: any = await MembersApi.getAll();
      setMembers([...res]);
      setFilterMembers([...res]);
    } catch (e) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View onLayout={(event) => setLayoutY(event.nativeEvent.layout.y)}>
      <FindComponent
        members={members}
        onFocus={() => onFocus(layoutY)}
        setFilterMembers={setFilterMembers}
      />
      {isLoading ? (
        <View style={{ paddingBottom: 40 }}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={filterMembers}
          renderItem={({ item }) => (
            <BaseMember item={item} onPress={() => onPress(item)} />
          )}
          keyExtractor={(_, index) => index.toString()}
          ListEmptyComponent={<Text>No matching results were found!</Text>}
          extraData={filterMembers}
        />
      )}
    </View>
  );
}

export default ListFooterComponent;
