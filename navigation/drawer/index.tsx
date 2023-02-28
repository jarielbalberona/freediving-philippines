import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomStack from "../bottom";
import ProfileStackScreen from "../profile";

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="HomeStack">
    <Drawer.Screen
      name="HomeStack"
      component={BottomStack}
      options={{ headerShown: false, drawerLabel: "Home" }}
    />
    <Drawer.Screen
      name="ProfileStack"
      component={ProfileStackScreen}
      options={{ headerShown: false, drawerLabel: "Profile" }}
    />
  </Drawer.Navigator>
);

export default DrawerScreen;
