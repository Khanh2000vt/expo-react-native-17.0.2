import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CommunitiesScreen, CommunityDetailScreen } from "../../screens";

const Stack = createNativeStackNavigator();
function CommunitiesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="CommunitiesScreen" component={CommunitiesScreen} />
      <Stack.Screen
        name="CommunityDetailScreen"
        component={CommunityDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default CommunitiesStack;
