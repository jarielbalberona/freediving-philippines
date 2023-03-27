import { useEffect } from "react";
import { Text, View, Button } from "react-native";

import BuddiesData from "../../data/buddies.json";

const Buddies = ({ navigation }: any) => {
  useEffect(() => {
    console.log("navigation", navigation);
    console.log("Buddies", BuddiesData);
  }, [navigation]);

  return <View className="h-full bg-white"></View>;
};

export default Buddies;
