import Icon from "@components/icon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SignIn from "@screens/authentication/sign-in";
import SignUp from "@screens/authentication/sign-up";

import { RootTabParamList } from "../../types";

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const AuthBottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName="SignIn">
      <BottomTab.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "Sign in",
          tabBarIcon: ({ color }) => <Icon name="account" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="SignUp"
        component={SignUp}
        options={{
          tabBarIcon: ({ color }) => <Icon name="account-plus" color={color} />,
          tabBarLabel: "Sign up",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AuthBottomTabNavigator;
