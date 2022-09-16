import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  BaseButton,
  LockKeyOpen,
  Prohibit,
  SignOut,
  SvgCopy,
  UserCircle,
  Warnings,
} from "../../components";
import BaseAlert from "../../components/BaseAlert/BaseAlert";
import { theme } from "../../constants";
import { logoutAuth, RootState } from "../../redux";
function AccountScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const [isVisible, setVisible] = useState<boolean>(false);
  const accountMenu = [
    {
      id: 1,
      title: "Your profile",
      icon: <UserCircle />,
      onPress: () => navigation.navigate("YourProfileScreen"),
    },
    {
      id: 2,
      title: "Block List",
      icon: <Prohibit />,
      onPress: () => navigation.navigate("BlockListScreen"),
    },
    {
      id: 3,
      title: "Change password",
      icon: <LockKeyOpen />,
      onPress: () => navigation.navigate("ChangePasswordScreen"),
    },
    {
      id: 4,
      title: "Log out",
      icon: <SignOut />,
      onPress: () => setVisible(!isVisible),
      // onPress: () => dispatch(logoutAuth()), // test
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.textTitle}>Account</Text>

        <View style={styles.accountView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate("YourProfileScreen")}
          >
            <Image source={{ uri: user.avatar }} style={styles.imageAccount} />
          </TouchableOpacity>
          <View style={styles.accountViewBody}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("YourProfileScreen")}
            >
              <Text style={styles.textNameAccount}>{user.name}</Text>
            </TouchableOpacity>
            <View style={styles.accountViewID}>
              <Text style={styles.textID}>ID: {user.id_account}</Text>
              <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
                <SvgCopy />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View>
          {accountMenu.map((itemMenu) => {
            return (
              <TouchableOpacity
                key={itemMenu.id}
                onPress={itemMenu.onPress}
                style={styles.itemMenu}
                activeOpacity={0.8}
              >
                {itemMenu.icon}
                <Text style={styles.itemMenuTitle}>{itemMenu.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <BaseButton
          title="Cancel account"
          option="solid"
          IconRight={<Warnings />}
          style={styles.button}
          color={theme.colors.Semantic4}
          styleText={styles.buttonText}
        />
      </ScrollView>
      <BaseAlert isVisible={isVisible}>
        <View style={styles.bodyAlert}>
          <Text style={styles.textTitleAlert}>Do you want to Log out?</Text>
        </View>
        <View style={[styles.viewButtonAlert]}>
          <BaseButton
            title="Log out"
            style={[styles.buttonAlert, { marginLeft: 0 }]}
            onPress={() => {
              setVisible(false);
              setTimeout(() => {
                dispatch(logoutAuth());
              }, 500);
            }}
          />
          <BaseButton
            title="Cancel"
            option="solid"
            style={[styles.buttonAlert, { marginRight: 0 }]}
            onPress={() => setVisible(false)}
          />
        </View>
      </BaseAlert>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.Neutral0,
  },
  contentContainer: {
    paddingTop: 80,
    paddingHorizontal: 24,
  },
  textTitle: {
    textAlign: "center",
    color: theme.colors.Neutral10,
    fontWeight: "600",
    fontSize: theme.fontSize.font24,
  },
  accountView: {
    backgroundColor: theme.colors.colorInput,
    padding: 18,
    marginVertical: 24,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
  },
  imageAccount: {
    width: 48,
    height: 48,
    borderRadius: 100,
  },
  accountViewBody: {
    flex: 1,
    marginLeft: 20,
  },
  textNameAccount: {
    color: theme.colors.Neutral10,
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
    marginBottom: 7,
  },
  accountViewID: {
    flexDirection: "row",
  },
  textID: {
    fontWeight: "400",
    fontSize: theme.fontSize.font14,
    color: theme.colors.Neutral6,
    marginRight: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderColor: theme.colors.Neutral3,
    alignItems: "center",
  },
  itemMenuTitle: {
    color: theme.colors.Neutral10,
    fontWeight: "500",
    fontSize: theme.fontSize.font18,
    marginLeft: 20,
  },
  button: {
    borderColor: theme.colors.Semantic4,
    marginBottom: 55,
    marginTop: 155,
  },
  buttonText: {
    fontWeight: "600",
    fontSize: theme.fontSize.font16,
  },
  bodyAlert: {
    marginBottom: 64,
  },
  viewButtonAlert: {
    flexDirection: "row",
  },
  textTitleAlert: {
    textAlign: "center",
    fontSize: theme.fontSize.font18,
    color: theme.colors.Neutral8,
    fontWeight: "500",
  },
  buttonAlert: {
    flex: 1,
    marginHorizontal: 15,
  },
});

export default AccountScreen;
