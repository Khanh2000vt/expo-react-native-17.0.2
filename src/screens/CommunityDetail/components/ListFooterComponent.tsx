import { BaseMember } from "@components";
import { ICommunityAPI, IMemberAPI } from "@model";
import { getMemberRedux, getUserRedux } from "@redux";
import { getMembersInCommunity } from "@utils";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import FindComponent from "./FindComponent";

interface IState {
  onPress: (item: IMemberAPI) => void;
  community: ICommunityAPI;
}

function ListFooterComponent({ onPress, community }: IState) {
  const userRedux = useSelector(getUserRedux);
  const membersRedux = useSelector(getMemberRedux);
  const [members, setMembers] = useState<IMemberAPI[]>([]);
  const [filterMembers, setFilterMembers] = useState<IMemberAPI[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    getMembers();
  }, [community]);

  const getMembers = async () => {
    try {
      setIsLoading(true);
      let membersAPI = await getMembersInCommunity(
        community.members,
        membersRedux,
        userRedux
      );
      setMembers([...membersAPI]);
      setFilterMembers([...membersAPI]);
    } catch (e) {
      console.log("error: ", e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View>
      <FindComponent members={members} setFilterMembers={setFilterMembers} />
      {community.members.length === 0 ? (
        <View style={{ paddingBottom: 40 }}>
          <Text style={styles.text}>
            This community has no members. Join now !!!
          </Text>
        </View>
      ) : isLoading ? (
        <View style={{ paddingBottom: 40 }}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          data={filterMembers}
          renderItem={({ item }) => (
            <BaseMember member={item} onPress={() => onPress(item)} />
          )}
          keyExtractor={(_, index) => index.toString()}
          ListEmptyComponent={
            <Text style={styles.text}>No matching results were found!</Text>
          }
          extraData={filterMembers}
          style={styles.flatList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: "center",
  },
  flatList: {
    paddingBottom: 57,
  },
});

export default ListFooterComponent;
