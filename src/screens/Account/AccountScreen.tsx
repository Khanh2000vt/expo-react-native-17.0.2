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
import { Navigation } from "@constant/index";
import { logoutAuth, RootState } from "../../redux";
import { AlertComponent, MenuComponent } from "./components";
import { Title } from "./enum";
import { IMenu } from "./model";
import { theme } from "@theme";

function AccountScreen({ navigation }: { navigation: any }) {
  //redux
  const dispatch = useDispatch();
  const userRedux = useSelector((state: RootState) => state.auth.user);
  //state
  const [isVisible, setVisible] = useState<boolean>(false);

  const accountMenu: IMenu[] = [
    {
      id: 1,
      title: Title.YOUR_PROFILE,
      icon: <UserCircle />,
      onPress: () => navigation.navigate(Navigation.YOUR_PROFILE),
    },
    {
      id: 2,
      title: Title.BLOCK_LIST,
      icon: <Prohibit />,
      onPress: () => navigation.navigate(Navigation.BLOCK_LIST),
    },
    {
      id: 3,
      title: Title.CHANGE_PASSWORD,
      icon: <LockKeyOpen />,
      onPress: () => navigation.navigate(Navigation.CHANGE_PASSWORD),
    },
    {
      id: 4,
      title: Title.LOG_OUT,
      icon: <SignOut />,
      onPress: () => setVisible(!isVisible),
    },
  ];

  const handleLogOut = () => {
    setVisible(false);
    setTimeout(() => {
      dispatch(logoutAuth());
    }, 500);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        bounces={false}
      >
        <Text style={styles.textTitle}>Account</Text>

        <View style={styles.accountView}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(Navigation.YOUR_PROFILE)}
          >
            <Image
              source={{ uri: userRedux.avatar }}
              style={styles.imageAccount}
            />
          </TouchableOpacity>
          <View style={styles.accountViewBody}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate(Navigation.YOUR_PROFILE)}
            >
              <Text style={styles.textNameAccount}>{userRedux.name}</Text>
            </TouchableOpacity>
            <View style={styles.accountViewID}>
              <Text style={styles.textID}>ID: {userRedux.user_id}</Text>
              <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
                <SvgCopy />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <>
          {accountMenu.map((itemMenu) => {
            return <MenuComponent menu={itemMenu} key={itemMenu.id} />;
          })}
        </>

        <BaseButton
          title={Title.CANCEL_ACCOUNT}
          option="solid"
          IconRight={<Warnings />}
          style={styles.button}
          color={theme.colors.Semantic4}
          styleText={styles.buttonText}
        />
      </ScrollView>
      <BaseAlert isVisible={isVisible}>
        <AlertComponent
          onPressLogout={handleLogOut}
          onPressCancel={() => setVisible(false)}
        />
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
