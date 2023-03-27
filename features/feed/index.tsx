import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import Highlights from "../highlights";
import Branding from "../../components/brand-header";
import PostCard from "../../components/post-card";

const Feed = ({ navigation }: any) => {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Dive spots",
      description_short: "Explore the oceans",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-11.jpg",
      width: "w-3/5",
      title_size: "text-xl",
    },
    {
      id: "2",
      name: "Buddies",
      description_short: "Never dive alone",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-12.jpg",
      width: "w-2/5",
      title_size: "text-xl",
    },
    {
      id: "3",
      name: "Creators",
      description_short: "Some desc",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-13.jpg",
      width: "w-4/12",
      title_size: "text-sm",
    },
    {
      id: "4",
      name: "Marketplace",
      description_short: "Some desc",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-14.jpg",
      width: "w-4/12",
      title_size: "text-sm",
    },
    {
      id: "5",
      name: "Community",
      description_short: "Some desc",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-15.jpg",
      width: "w-4/12",
      title_size: "text-sm",
    },
  ]);
  return (
    <View className="flex mt-4">
      <FlatList
        data={items}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => <PostCard item={item} />}
        keyExtractor={(item: any) => item.id}
        ListHeaderComponent={() => (
          <View className="mb-4">
            <Branding />
            <Highlights />
          </View>
        )}
      />
    </View>
  );
};

export default Feed;
