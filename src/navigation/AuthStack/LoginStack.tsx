import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CommunitiesScreen from "../../screens/Communities/CommunitiesScreen";
import ForgotPasswordScreen from "../../screens/ForgotPassword/ForgotPasswordScreen";
import LoginScreen from "../../screens/Login/LoginScreen";
import OTPScreen from "../../screens/OTP/OTPScreen";
import AccountsSNSScreen from "../../screens/AccountsSNS/AccountsSNSScreen";
import RegisterScreen from "../../screens/Register/RegisterScreen";
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
    </LoginStack.Navigator>
  );
}

export default LoginStackScreen;
