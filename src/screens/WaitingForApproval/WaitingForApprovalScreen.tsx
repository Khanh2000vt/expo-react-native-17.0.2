import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import { BaseButton, BaseHeader, Users, VectorBack } from "../../components";
import { theme } from "../../constants";

function WaitingForApprovalScreen({ navigation }: { navigation: any }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<any[]>([]);
  useEffect(() => {
    getListUser();
  }, []);

  async function getListUser() {
    try {
      const res = await axios(
        "https://631fe0a5e3bdd81d8eeeacf8.mockapi.io/approval"
      );

      setUsers([...res.data]);
      setIsLoading(false);
    } catch (e) {
      setUsers([]);
    }
  }
  const keyExtractor = useCallback((_, index) => index.toString(), []);
  const renderItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.containerItem}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.bodyItem}>
          <View style={styles.viewTextTitle}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textTime}>2 days ago</Text>
          </View>
          <View style={[styles.flex, styles.viewFriend]}>
            <Text style={styles.textFriend}>{item.friend}</Text>
            <Users />
          </View>
          <View style={styles.viewCommunities}>
            {Array(3)
              .fill(0)
              .map((_community, index) => {
                return (
                  <View key={index} style={[styles.flex, styles.viewCommunity]}>
                    <Image
                      source={{ uri: item.avatar }}
                      style={styles.imageCommunity}
                    />
                    <Text style={styles.textNameCommunity}>Music</Text>
                  </View>
                );
              })}
          </View>
          <View style={[styles.flex, styles.viewButton]}>
            <BaseButton
              title="Accept"
              style={[styles.button, styles.buttonAccept]}
              onPress={() => handleAccept(item)}
            />
            <BaseButton
              title="Reject"
              option="solid"
              color={theme.colors.Neutral4}
              style={[styles.button, styles.buttonReject]}
              onPress={() => handleReject(item)}
            />
          </View>
        </View>
      </View>
    );
  };

  function handleAccept(user: any) {
    handleTest(user);
  }
  function handleReject(user: any) {
    handleTest(user);
  }

  function handleTest(user: any) {
    let index = users.indexOf(user);
    setUsers([...users.slice(0, index), ...users.slice(index + 1)]);
    // axios({
    //   method: "DELETE",
    //   url: "https://631fe0a5e3bdd81d8eeeacf8.mockapi.io/approval",
    //   data: {
    //     id: user.id,
    //   },
    // });
  }
  return (
    <View style={styles.container}>
      <BaseHeader
        title="Waiting for approval"
        IconLeft={<VectorBack />}
        onPressLeft={() => navigation.goBack()}
        styleHeader={styles.styleHeader}
      />
      {isLoading ? (
        <ActivityIndicator style={styles.activityIndicator} />
      ) : (
        <FlatList
          data={users}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.flatList}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Neutral0,
    flex: 1,
  },
  flatList: {
    paddingHorizontal: 24,
  },
  styleHeader: {
    paddingHorizontal: 33,
    marginTop: 80,
  },
  activityIndicator: {
    marginTop: 40,
  },
  containerItem: {
    backgroundColor: theme.colors.Neutral1,
    marginVertical: 10,
    padding: 16,
    paddingLeft: 20,
    borderRadius: 8,
    flexDirection: "row",
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: theme.colors.Semantic1,
  },
  bodyItem: {
    marginLeft: 20,
    flex: 1,
  },
  textName: {
    fontSize: theme.fontSize.font16,
    fontWeight: "600",
    lineHeight: 25.6,
    color: theme.colors.darkerPrimary,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  imageCommunity: {
    width: 24,
    height: 24,
    borderRadius: 100,
    marginRight: 8,
  },
  textTime: {
    fontWeight: "500",
    fontSize: theme.fontSize.font14,
    lineHeight: 22.4,
    color: theme.colors.Neutral4,
    marginBottom: 4,
  },
  viewTextTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textFriend: {
    fontWeight: "400",
    fontSize: theme.fontSize.font16,
    lineHeight: 21.79,
    color: theme.colors.Neutral6,
    marginRight: 4,
  },
  viewFriend: {
    marginTop: 5,
  },
  viewCommunities: {
    marginTop: 25,
  },
  viewCommunity: {
    marginBottom: 4,
  },
  textNameCommunity: {
    fontSize: theme.fontSize.font14,
    fontWeight: "500",
    lineHeight: 22.4,
    color: theme.colors.Neutral8,
  },
  viewButton: {
    justifyContent: "space-between",
  },
  button: {
    // paddingHorizontal: 32,
    flex: 1,
  },
  buttonAccept: {
    marginRight: 8,
  },
  buttonReject: {
    marginHorizontal: 8,
  },
});

export default WaitingForApprovalScreen;
