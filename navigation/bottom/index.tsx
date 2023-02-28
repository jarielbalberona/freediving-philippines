import { View, Text, Pressable } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList, RootTabScreenProps } from "../../types";
import { FontAwesome } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

import Home from "../../screens/home";
import Details from "../../screens/details";
import SearchStackScreen from "../../navigation/search";

const BottomTab = createBottomTabNavigator<RootTabParamList>();
const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Freediving Philippines",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="snorkel" color={color} />
          ),
          headerShown: false,
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate('Modal')}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}>
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       color="#000000"
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // ),
        })}
      />
      <BottomTab.Screen
        name="Details"
        component={Details}
        options={{
          title: "Freediving Search",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="SearchStack"
        component={SearchStackScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
          tabBarLabel: "Search",
        }}
      />
    </BottomTab.Navigator>
  );
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Fontisto>["name"];
  color: string;
}) {
  return <Fontisto size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default BottomTabNavigation;
