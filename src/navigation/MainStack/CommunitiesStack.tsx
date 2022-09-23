import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../constants";
import { CommunitiesScreen } from "../../screens";

const Stack = createNativeStackNavigator();
function CommunitiesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={Navigation.COMMUNITIES}
        component={CommunitiesScreen}
      />
    </Stack.Navigator>
  );
}

export default CommunitiesStack;
