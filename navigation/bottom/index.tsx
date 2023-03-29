import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootTabParamList, RootTabScreenProps } from "../../types";

import Home from "../../screens/home";
import MapSearchStackScreen from "../../navigation/map-search";
import SearchStackScreen from "../../navigation/search";
import Icon from "../../components/icon";

const BottomTab = createBottomTabNavigator<RootTabParamList>();
const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator initialRouteName="Map">
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={({ navigation }: RootTabScreenProps<"Home">) => ({
          title: "Freediving Philippines",
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <Icon name="diving-snorkel" color={color} />
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
        name="MapStack"
        component={MapSearchStackScreen}
        options={{
          title: "Explore Freediving",
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="map" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="SearchStack"
        component={SearchStackScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Icon name="account" color={color} />,
          tabBarLabel: "Search",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
