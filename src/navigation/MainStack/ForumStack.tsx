import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SCREEN } from "@constant/index";
import { ForumDetailScreen, ForumScreen, NewPostScreen } from "@screens";
import { ForumStackParamList } from "@navigation/type";
const Stack = createNativeStackNavigator<ForumStackParamList>();

function ForumStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREEN.FORUM} component={ForumScreen} />
      <Stack.Screen
        name={SCREEN.FORUM_DETAIL}
        component={ForumDetailScreen}
      />
      <Stack.Screen name={SCREEN.NEW_POST} component={NewPostScreen} />
    </Stack.Navigator>
  );
}

export default ForumStack;
