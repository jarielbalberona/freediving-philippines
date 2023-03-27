import { createStackNavigator } from "@react-navigation/stack";
import Buddies from "../../screens/buddies";

const BuddiesStack = createStackNavigator();

const BuddiesStackScreen = () => (
  <BuddiesStack.Navigator initialRouteName="Buddies">
    <BuddiesStack.Screen name="Buddies" component={Buddies} />
  </BuddiesStack.Navigator>
);

export default BuddiesStackScreen;
