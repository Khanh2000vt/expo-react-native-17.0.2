import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ForgotPasswordScreen from "../../views/login/ForgotPasswordScreen";
import LoginScreen from "../../views/login/LoginScreen";
import RegisterScreen from "../../views/login/RegisterScreen";

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
    </LoginStack.Navigator>
  );
}

export default LoginStackScreen;
