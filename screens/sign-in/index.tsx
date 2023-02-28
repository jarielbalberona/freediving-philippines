import { Text, View, Button } from 'react-native';

const Search = ({ navigation }: any) => (
    <View>
       <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => alert("signin")} />
      <Button
        title="Create Account"
        onPress={() => navigation.push("SignUp")}
      />
    </View>
  );

  export default Search;