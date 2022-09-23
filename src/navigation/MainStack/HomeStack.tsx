import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../constant";
import { HomeScreen } from "../../screens";

const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Navigation.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
