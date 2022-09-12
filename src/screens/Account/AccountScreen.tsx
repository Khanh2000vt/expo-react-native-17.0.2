import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
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
import { BaseButtonProps } from "../../components/BaseButton/BaseButtonModel";
import { theme } from "../../constants";
import { logoutAuth } from "../../redux";
function AccountScreen({ navigation }: { navigation: any }) {
  const dispatch = useDispatch();
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
      onPress: () => {},
    },
    {
      id: 3,
      title: "Change password",
      icon: <LockKeyOpen />,
      onPress: () => {},
    },
    {
      id: 4,
      title: "Log out",
      icon: <SignOut />,
      onPress: () => setVisible(!isVisible),
      // onPress: () => dispatch(logoutAuth()), // test
    },
  ];

  const arrayButtonAlert: BaseButtonProps[] = [
    {
      title: "Log out",
      option: "fill",
      onPress: () => {
        setVisible(false);
        setTimeout(() => {
          dispatch(logoutAuth());
        } , 500)
      },
    },
    {
      title: "Cancel",
      option: "solid",
      onPress: () => setVisible(false),
    },
  ];

  console.log("isVisible: ", isVisible);
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.textTitle}>Account</Text>

        <View style={styles.accountView}>
          <Image
            source={require("../../../assets/png/Rectangle68.png")}
            style={styles.imageAccount}
          />
          <View style={styles.accountViewBody}>
            <Text style={styles.textNameAccount}>Matsuura Yuki</Text>
            <View style={styles.accountViewID}>
              <Text style={styles.textID}>ID: 1752648</Text>
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
      <BaseAlert
        title="Do you want to Log out?"
        isVisible={isVisible}
        arrayButton={arrayButtonAlert}
      />
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
});

export default AccountScreen;
