

import { createStackNavigator } from "@react-navigation/stack";
import { RootTabParamList } from '../../types';
import SignIn from "../../screens/sign-in"
import SignUp from "../../screens/sign-up"

const AuthStack = createStackNavigator<RootTabParamList>();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: "Sign In" }}
    />
    <AuthStack.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: "Sign Up" }}
    />
  </AuthStack.Navigator>
);

export default AuthStackScreen;