import React, { useCallback, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { BaseAlert } from "@components/BaseAlert";
import { BasePopupRequest } from "@components/BasePopupRequest";
import {
  acceptMemberApproval,
  addMemberBlock,
  addMemberRequest,
  spendCoins,
} from "@redux";
import { theme } from "@theme";
import { BaseProfileProps } from "./BaseProfileModel";
import {
  AlertBlockComponent,
  ListFooterComponent,
  ListHeaderComponent,
} from "./components";
import { OtherProfile } from "@constant/index";

function BaseProfile({
  navigation,
  listAmount = [],
  listSocial = [],
  listJoined = [],
  user,
  relationship,
}: BaseProfileProps) {
  const dispatch = useDispatch();
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false);
  const [isShowAlert, setIsShowAlert] = useState<boolean>(false);
  const isApproval = relationship === OtherProfile.APPROVAL;

  const keyExtractor = useCallback((_, index) => index.toString(), []);

  const handlePressOK = () => {
    let param = {
      user: user,
    };
    dispatch(spendCoins(500));
    if (isApproval) {
      dispatch(acceptMemberApproval(param));
    } else {
      dispatch(addMemberRequest(param));
    }
    setIsVisibleModal(false);
  };

  const handleAgreeBlock = () => {
    const param = {
      user: user,
    };
    dispatch(addMemberBlock(param));
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
        ListHeaderComponent={
          <ListHeaderComponent
            relationship={relationship}
            listAmount={listAmount}
            listSocial={listSocial}
            listJoined={listJoined}
            navigation={navigation}
            user={user}
          />
        }
        ListFooterComponent={
          <ListFooterComponent
            relationship={relationship}
            navigation={navigation}
            setIsShowAlert={setIsShowAlert}
            setIsVisibleModal={setIsVisibleModal}
            user={user}
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
        accept={isApproval}
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
