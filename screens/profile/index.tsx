import UserAvatar from "@components/avatar";
import Icon from "@components/icon";
import BuddiesData from "@data/buddies.json";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text, View, ImageBackground } from "react-native";

const Profile = ({ user_id, params, navigation }: any) => {
  const route = useRoute();
  const [is_mine, setIsMine] = useState(false);
  const [user, setUser] = useState(null) as any;

  useEffect(() => {
    const { user_id } = route.params as any;
    console.log("user_id", user_id);
    setUser(BuddiesData.find((buddy: any) => buddy.id === user_id));
  }, []);

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    <View className="h-full bg-white">
      <View className="relative z-10 w-full h-48">
        <ImageBackground
          className="flex w-full h-full overflow-hidden "
          source={{
            uri: "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-1.jpg",
          }}
          resizeMode="cover"
        />
        <View className="absolute bottom-0 flex items-center justify-center w-full -mb-20 ">
          <View className="w-40">
            <UserAvatar size={160} is_with_details={false} has_story />
          </View>
        </View>
      </View>
      <View className="mt-6">
        <View className="flex-row items-center justify-between flex-none -z-2 ">
          <View className="flex flex-row items-center justify-center h-16 h-auto ">
            <View className="flex flex-row justify-center w-16">
              <Icon name="phone" color="#194569" />
            </View>
            <View className="flex flex-row justify-center w-16">
              <Icon name="chat" color="#194569" />
            </View>
          </View>
          <View className="flex flex-row items-center justify-center h-16">
            <View className="flex flex-row justify-center w-16">
              <Icon name="account-eye" color="#194569" />
            </View>
            <View className="flex flex-row justify-center w-16">
              <Icon name="dots-vertical" color="#194569" />
            </View>
          </View>
        </View>
        <View className="flex flex-row items-center mx-4 mt-2">
          <View className="flex flex-1 h-[0.5] bg-black" />
          <View className="mx-2">
            <Text className="text-2xl font-bold text-center">
              {user?.full_name}
            </Text>
          </View>
          <View className="flex flex-1 h-[0.5] bg-black" />
        </View>
        <View className="flex items-center ">
          <View className="flex flex-row justify-around w-9/12 mt-4">
            <View className="flex items-center">
              <Text>1</Text>
              <Text className="text-xs">Followers</Text>
            </View>
            <View className="flex items-center">
              <Text>1</Text>
              <Text className="text-xs">Following</Text>
            </View>
            <View className="flex items-center">
              <Text>{user?.average_rating}</Text>
              <Text className="text-xs">Rating</Text>
            </View>
          </View>
        </View>
        <View className="flex flex-row justify-center mt-8 ">
          <Text className="text-center">{user?.bio}</Text>
        </View>
        <View>
          <Text>Details</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
