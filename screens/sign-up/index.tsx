import { Text, View, Button } from 'react-native';

const Search = ({ navigation }: any) => (
    <View>
       <Text>Sign Up Screen</Text>
      <Button title="Sign Up" onPress={() => alert("signin")} />
    </View>
  );

  export default Search;