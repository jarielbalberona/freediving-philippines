import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../../screens/search";
import Search2 from "../../screens/search2";

const SearchStack = createStackNavigator();

const SearchStackScreen = () => (
  <SearchStack.Navigator initialRouteName="Search">
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
);

export default SearchStackScreen;
