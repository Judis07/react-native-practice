import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import ChatSettingScreen from "../screens/ChatSettingScreen";

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
        name="Setting"
        component={ChatSettingScreen}
        options={{
          title: "Settings",
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
