import { SafeAreaView, StatusBar, View } from "react-native";

import Feed from "../../features/feed";
const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar />
      <Feed />
    </SafeAreaView>
  );
};

export default Home;
