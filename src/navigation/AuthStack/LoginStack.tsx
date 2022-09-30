import { LoginStackParamList } from "@navigation/type";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN } from "@constant/index";
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
} from "@screens";
const Stack = createNativeStackNavigator<LoginStackParamList>();
function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREEN.LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={SCREEN.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name={SCREEN.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={SCREEN.OTP} component={OTPScreen} />
      <Stack.Screen
        name={SCREEN.ACCOUNTS_SNS}
        component={AccountsSNSScreen}
      />
      <Stack.Screen
        name={SCREEN.PICK_PREFER}
        component={PickPreferScreen}
      />
      <Stack.Screen
        name={SCREEN.PERSONAL_INTRODUCTION}
        component={PersonalIntroductionScreen}
      />
      <Stack.Screen
        name={SCREEN.REGISTER_FORGOT}
        component={RegisterForgotScreen}
      />
      <Stack.Screen
        name={SCREEN.SUCCESSFULLY}
        component={SuccessfullyScreen}
      />
    </Stack.Navigator>
  );
}

export default LoginStack;
