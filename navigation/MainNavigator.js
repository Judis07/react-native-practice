import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import ChatSettingScreen from "../screens/ChatSettingScreen";
import ChatScreen from "../screens/ChatScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Chat Screen"
        component={ChatScreen}
        options={{
          headerTitle: "",
          headerBackTitle: "Back",
        }}
      />

      <Stack.Screen
        name="Setting"
        component={ChatSettingScreen}
        options={{
          title: "Settings",
          headerBackTitle: "Back",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
