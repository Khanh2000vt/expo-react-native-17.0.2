import { CommunitiesStackParamList } from "@navigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN } from "@constant/index";
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
        name={SCREEN.COMMUNITIES}
        component={CommunitiesScreen}
      />
    </Stack.Navigator>
  );
}

export default CommunitiesStack;
