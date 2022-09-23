import { CommunitiesStackParamList } from "@navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "@constant/index";
import { CommunitiesScreen } from "@screens";

const Stack = createNativeStackNavigator<CommunitiesStackParamList>();
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
