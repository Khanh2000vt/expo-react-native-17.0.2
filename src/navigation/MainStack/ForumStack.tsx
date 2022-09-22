import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ForumDetailScreen, ForumScreen, NewPostScreen } from "../../screens";
const Stack = createNativeStackNavigator();

function ForumStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // gestureEnabled: false,
      }}
    >
      <Stack.Screen name="ForumScreen" component={ForumScreen} />
      <Stack.Screen name="ForumDetailScreen" component={ForumDetailScreen} />
      <Stack.Screen
        name="NewPostScreen"
        component={NewPostScreen}
        // options={{ gestureEnabled: false }}
        options={
          {
            // gestureEnabled: false,
          }
        }
      />
    </Stack.Navigator>
  );
}

export default ForumStack;
