import { View, Text } from "react-native"
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../../screens/search";
import Search2 from "../../screens/search2";

const ScreenStack = createStackNavigator();

const SearchStackScreen = () => (
  <ScreenStack.Navigator initialRouteName="Search">
    <ScreenStack.Screen name="Search" component={Search} />
    <ScreenStack.Screen name="Search2" component={Search2}/> 
  </ScreenStack.Navigator>
);

export default SearchStackScreen;