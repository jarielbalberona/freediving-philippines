import { Text, View, Button } from 'react-native';

const Search = ({ navigation }: any) => (
    <View>
      <Text>Search Screen</Text>
      <Button title="Search 2" onPress={() => navigation.push("Search2")} />
      <Button
        title="React Native School"
        onPress={() => {
          navigation.navigate("R", {
            screen: "Details",
            params: { name: "React Native School" }
          });
        }}
      />
    </View>
  );

  export default Search;