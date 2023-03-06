import { createStackNavigator } from "@react-navigation/stack";
import MapSearch from "../../screens/map-search";

const MapSearchStack = createStackNavigator();

const MapSearchStackScreen = () => (
  <MapSearchStack.Navigator initialRouteName="Map">
    <MapSearchStack.Screen name="Map" component={MapSearch} />
  </MapSearchStack.Navigator>
);

export default MapSearchStackScreen;
