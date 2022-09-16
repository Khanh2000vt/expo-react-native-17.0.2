import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ForumScreen } from "../../screens";
const Stack = createNativeStackNavigator();

function ForumStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="ForumScreen" component={ForumScreen} />
    </Stack.Navigator>
  );
}

export default ForumStack;
