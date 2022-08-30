import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../../screens";

const Stack = createNativeStackNavigator();
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
