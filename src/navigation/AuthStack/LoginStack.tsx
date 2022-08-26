import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AccountsSNSScreen,
  CommunitiesScreen,
  ForgotPasswordScreen,
  LoginScreen,
  OTPScreen,
  PersonalIntroductionScreen,
  RegisterScreen,
} from "../../screens";
const LoginStack = createNativeStackNavigator();
function LoginStackScreen() {
  return (
    <LoginStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} />
      <LoginStack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <LoginStack.Screen name="RegisterScreen" component={RegisterScreen} />
      <LoginStack.Screen name="OTPScreen" component={OTPScreen} />
      <LoginStack.Screen
        name="AccountsSNSScreen"
        component={AccountsSNSScreen}
      />
      <LoginStack.Screen
        name="CommunitiesScreen"
        component={CommunitiesScreen}
      />
      <LoginStack.Screen
        name="PersonalIntroductionScreen"
        component={PersonalIntroductionScreen}
      />
    </LoginStack.Navigator>
  );
}

export default LoginStackScreen;
