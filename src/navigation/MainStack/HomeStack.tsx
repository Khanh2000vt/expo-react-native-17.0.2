import { HomeStackParamList } from "@navigation/type";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN } from "@constant/index";
import { HomeScreen } from "@screens";

const Stack = createNativeStackNavigator<HomeStackParamList>();
function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREEN.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
