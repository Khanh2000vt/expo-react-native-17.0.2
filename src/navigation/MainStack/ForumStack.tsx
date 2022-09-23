import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "../../constants";
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
      <Stack.Screen name={Navigation.FORUM} component={ForumScreen} />
      <Stack.Screen
        name={Navigation.FORUM_DETAIL}
        component={ForumDetailScreen}
      />
      <Stack.Screen
        name={Navigation.NEW_POST}
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
