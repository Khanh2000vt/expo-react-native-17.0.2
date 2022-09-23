import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  ArrowRight,
  BaseAreaView,
  BaseButton,
  BaseDropDown,
  BaseGettingStarted,
  BaseInput,
} from "../../components";
import { gender, theme } from "../../constant";
const colors = theme.colors;
function PersonalIntroductionScreen({ navigation }: { navigation: any }) {
  return (
    <BaseAreaView>
      <BaseGettingStarted
        titleScreen="Personal Introduction"
        step={3}
        titleStep="Profile picture"
      />
      <View style={styles.containerProfile}>
        <Image source={require("../../../assets/png/avtDefault.png")} />
        <TouchableOpacity activeOpacity={0.8}>
          <Text>Choose picture</Text>
        </TouchableOpacity>
      </View>
      <BaseGettingStarted showTitle={false} step={4} titleStep="Profile info" />
      <View>
        <View style={{ zIndex: 100 }}>
          <View style={{}}>
            <BaseDropDown
              data={gender}
              title="Profession"
              zIndex={1000}
              zIndexInverse={2000}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <BaseDropDown
              data={gender}
              title="Gender"
              zIndex={2000}
              zIndexInverse={1000}
            />
            <BaseDropDown
              data={gender}
              title="Birth year"
              zIndex={2000}
              zIndexInverse={1000}
            />
          </View>
        </View>
        <BaseInput title="Introduction" />
        <BaseButton
          title="Start"
          IconRight={<ArrowRight height={20} width={20} />}
        />
      </View>
    </BaseAreaView>
  );
}

const styles = StyleSheet.create({
  containerProfile: {
    marginBottom: 20,
  },
  textTitleInput: {
    color: colors.Neutral6,
  },
});
export default PersonalIntroductionScreen;
