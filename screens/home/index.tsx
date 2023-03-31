import Feed from "@features/feed";
import { SafeAreaView, StatusBar, View } from "react-native";

const Home = ({ navigation }: any) => {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar />
      <Feed />
    </SafeAreaView>
  );
};

export default Home;
