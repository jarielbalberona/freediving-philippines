import { createStackNavigator } from "@react-navigation/stack";
import MapSearch from "../../screens/map-search";
import BuddiesStackScreens from "../buddies";

const MapSearchStack = createStackNavigator();

const MapSearchStackScreen = () => (
  <MapSearchStack.Navigator initialRouteName="Map">
    <MapSearchStack.Screen
      name="Map"
      component={MapSearch}
      options={{
        headerShown: false,
      }}
    />
    <MapSearchStack.Screen
      name="BuddiesStack"
      component={BuddiesStackScreens}
      options={{
        headerShown: false,
      }}
    />
  </MapSearchStack.Navigator>
);

export default MapSearchStackScreen;
