import { Text, View } from 'react-native';
import { RootTabScreenProps } from '../../types';

const Details = ({ route }: RootTabScreenProps<'Details'>) => (
  <View>
    <Text>Details Screen</Text>
    {/* {route.params.name && <Text>{route.params.name}</Text>} */}
    <Text>Test</Text>
  </View>
);

export default Details;
