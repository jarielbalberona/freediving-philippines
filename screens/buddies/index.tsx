import BuddyCard from "@components/buddy-card";
import BuddiesData from "@data/buddies.json";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";

const Buddies = ({ navigation }: any) => {
  const route = useRoute();
  const [buddies, setBuddies] = useState([]);

  useEffect(() => {
    const { spot } = route.params as any;
    setBuddies(spot.buddies);
  }, []);

  return (
    <View className="h-full">
      <FlatList
        data={buddies}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => (
          <View className="mb-2">
            <BuddyCard buddy={item} />
          </View>
        )}
        keyExtractor={(buddy: any) => buddy.id}
      />
    </View>
  );
};

export default Buddies;
