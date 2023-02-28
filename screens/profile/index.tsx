import { Text, View, Button } from 'react-native';

export const Profile = ({ navigation }: any) => {
    // const { signOut } = React.useContext(AuthContext);

    return (
      <View>
        <Text>Profile Screen</Text>
        <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
        <Button title="Sign Out" onPress={() => alert("signout")} />
      </View>
    );
  };