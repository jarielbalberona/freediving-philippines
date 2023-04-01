import { createStackNavigator } from "@react-navigation/stack";
import Profile from "@screens/profile";
import { View, Text } from "react-native";
const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      initialParams={{ itemId: 42 }}
      options={{
        headerShown: false,
      }}
    />
  </ProfileStack.Navigator>
);

export default ProfileStackScreen;
