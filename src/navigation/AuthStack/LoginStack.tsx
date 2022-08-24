import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPasswordScreen from "../../screens/ForgotPassword/ForgotPasswordScreen";
import LoginScreen from "../../screens/Login/LoginScreen";
import OTPScreen from "../../screens/OTP/OTPScreen";
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
    </LoginStack.Navigator>
  );
}

export default LoginStackScreen;
