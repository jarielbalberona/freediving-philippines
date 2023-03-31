import UserAvatar from "@components/avatar";
import Reactions from "@components/reactions";
import { Text, View, Image } from "react-native";

const PostCard = ({ item }: any) => {
  return (
    <View className="w-full my-1 bg-white ">
      <View className="flex my-1 overflow-hidden">
        <UserAvatar user={item} is_with_details />
        <Image
          className="h-96"
          source={{
            uri: item.image,
          }}
        />
        <View className="flex justify-center p-2">
          <View className="flex flex-row items-center">
            <Reactions />
            <Text className="ml-2">You & 12 others liked this</Text>
          </View>
          <View>
            <Text className="mb-2">{item.description_short}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostCard;
