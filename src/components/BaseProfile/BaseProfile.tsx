import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";

import { BaseAlert, BasePopupRequest } from "@components";
import { OtherProfile } from "@constant/index";
import { spendCoins } from "@redux";
import { theme } from "@theme";
import { BaseProfileProps } from "./BaseProfileModel";
import {
  AlertBlockComponent,
  ListFooterComponent,
  ListHeaderComponent,
} from "./components";

function BaseProfile({
  navigation,
  isProfileSelf = false,
  avatar,
  name,
  idAccount,
  introduction,
  listAmount = [],
  listSocial = [],
  listJoined = [],
  type = OtherProfile.OTHER,
}: BaseProfileProps) {
  const dispatch = useDispatch();
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [isShowAlert, setIsShowAlert] = useState<boolean>(false);
  const [status, setStatus] = useState<OtherProfile>(OtherProfile.OTHER);

  useEffect(() => {
    setStatus(type);
  }, []);

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const handlePressOK = () => {
    dispatch(spendCoins(500));
    setStatus(
      status === OtherProfile.INVITATION
        ? OtherProfile.FRIEND
        : OtherProfile.REQUEST_PENDING
    );
    setIsVisibleModal(false);
  };

  const handleAgreeBlock = () => {
    setIsShowAlert(false);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[]}
        renderItem={() => <></>}
        bounces={false}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <ListFooterComponent
            isProfileSelf={isProfileSelf}
            status={status}
            navigation={navigation}
            setIsShowAlert={setIsShowAlert}
            setIsVisibleModal={setIsVisibleModal}
            setStatus={setStatus}
          />
        }
        ListHeaderComponent={
          <ListHeaderComponent
            isProfileSelf={isProfileSelf}
            status={status}
            listAmount={listAmount}
            listSocial={listSocial}
            listJoined={listJoined}
            avatar={avatar}
            name={name}
            idAccount={idAccount}
            introduction={introduction}
            navigation={navigation}
          />
        }
      />
      <BaseAlert
        isVisible={isShowAlert}
        onBackButtonPress={() => setIsShowAlert(false)}
        onBackdropPress={() => setIsShowAlert(false)}
        styleContainer={styles.baseAlertContainer}
      >
        <AlertBlockComponent
          onPressAgree={handleAgreeBlock}
          onPressCancel={() => setIsShowAlert(false)}
        />
      </BaseAlert>
      <BasePopupRequest
        isVisible={isVisibleModal}
        accept={status === OtherProfile.INVITATION}
        coinRequest={500}
        onBackButtonPress={() => setIsVisibleModal(false)}
        onBackdropPress={() => setIsVisibleModal(false)}
        onPressCancel={() => setIsVisibleModal(false)}
        onPressOK={handlePressOK}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.Neutral0,
  },
  baseAlertContainer: {
    alignItems: "center",
    paddingHorizontal: 0,
    paddingBottom: 0,
  },
});

export default BaseProfile;
