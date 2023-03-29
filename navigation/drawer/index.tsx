import { View, Text } from "react-native";
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import BottomStack from "../bottom";
import ProfileStackScreen from "../profile";
import { supabase } from "../../services/supabase";
import CustomDrawerList from "./custom-list";

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator
    initialRouteName="HomeStack"
    drawerContent={(props) => {
      return (
        <DrawerContentScrollView {...props}>
          <CustomDrawerList {...props} />
          <DrawerItem
            label="Sign out"
            onPress={() => supabase.auth.signOut()}
          />
        </DrawerContentScrollView>
      );
    }}
  >
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
