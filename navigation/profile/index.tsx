import { View, Text } from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "../../screens/profile";
const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

export default ProfileStackScreen;