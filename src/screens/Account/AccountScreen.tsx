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
import { useNavigation } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import { BaseAlert, BaseButton, SvgCopy, Warnings } from "@components";
import { SCREEN } from "@constant/index";
import { getUserRedux, logoutAuth, updateUser } from "@redux";
import { theme } from "@theme";
import { AlertComponent, ListMenu, MenuComponent } from "./components";
import { Title } from "./enum";
import { AccountTabProps } from "@navigation";
type INavigation = AccountTabProps<SCREEN.ACCOUNT>["navigation"];
function AccountScreen() {
  const navigation = useNavigation<INavigation>();
  //redux
  const dispatch = useDispatch();
  const userRedux = useSelector(getUserRedux);
  //state
  const [isVisible, setVisible] = useState<boolean>(false);

  const handleLogOut = () => {
    setVisible(false);
    setTimeout(() => {
      dispatch(logoutAuth());
    }, 500);
  };

  const handleCancelAccount = () => {
    const params = {
      password: null,
      email: null,
    };
    dispatch(updateUser(params));
    setTimeout(() => {
      dispatch(logoutAuth());
    }, 500);
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(userRedux.id_account.toString());
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
            onPress={() => navigation.navigate(SCREEN.YOUR_PROFILE)}
          >
            <View
              style={[
                styles.imageAccount,
                { backgroundColor: theme.colors.Neutral2 },
              ]}
            >
              <Image
                source={{ uri: userRedux.avatar }}
                style={styles.imageAccount}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.accountViewBody}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate(SCREEN.YOUR_PROFILE)}
            >
              <Text style={styles.textNameAccount}>{userRedux.name}</Text>
            </TouchableOpacity>
            <View style={styles.accountViewID}>
              <Text style={styles.textID}>ID: {userRedux.id_account}</Text>
              <TouchableOpacity activeOpacity={0.6} onPress={copyToClipboard}>
                <SvgCopy />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <>
          {ListMenu(navigation, setVisible).map((itemMenu) => {
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
          onPress={handleCancelAccount}
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
