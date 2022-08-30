import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommunitiesScreen } from "../../screens";

const Stack = createNativeStackNavigator();
function CommunitiesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CommunitiesScreen" component={CommunitiesScreen} />
    </Stack.Navigator>
  );
}

export default CommunitiesStack;
