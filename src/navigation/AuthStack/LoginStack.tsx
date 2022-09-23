import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../constant";
import {
  AccountsSNSScreen,
  PickPreferScreen,
  ForgotPasswordScreen,
  LoginScreen,
  OTPScreen,
  PersonalIntroductionScreen,
  RegisterForgotScreen,
  RegisterScreen,
  SuccessfullyScreen,
} from "../../screens";
const Stack = createNativeStackNavigator();
function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Navigation.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={Navigation.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name={Navigation.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={Navigation.OTP} component={OTPScreen} />
      <Stack.Screen
        name={Navigation.ACCOUNTS_SNS}
        component={AccountsSNSScreen}
      />
      <Stack.Screen
        name={Navigation.PICK_PREFER}
        component={PickPreferScreen}
      />
      <Stack.Screen
        name={Navigation.PERSONAL_INTRODUCTION}
        component={PersonalIntroductionScreen}
      />
      <Stack.Screen
        name={Navigation.REGISTER_FORGOT}
        component={RegisterForgotScreen}
      />
      <Stack.Screen
        name={Navigation.SUCCESSFULLY}
        component={SuccessfullyScreen}
      />
    </Stack.Navigator>
  );
}

export default LoginStack;
