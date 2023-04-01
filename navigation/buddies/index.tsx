import { createStackNavigator } from "@react-navigation/stack";
import Buddies from "@screens/buddies";
import Profile from "@screens/profile";

const BuddiesStack = createStackNavigator();

const BuddiesStackScreen = () => (
  <BuddiesStack.Navigator initialRouteName="Buddies">
    <BuddiesStack.Screen name="Buddies" component={Buddies} />
    <BuddiesStack.Screen name="Buddy" component={Profile} />
  </BuddiesStack.Navigator>
);

export default BuddiesStackScreen;
