import Branding from "@components/brand-header";
import PostCard from "@components/post-card";
import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";

import Highlights from "../highlights";

const Feed = ({ navigation }: any) => {
  const [items, setItems] = useState([
    {
      id: "1",
      first_name: "Fareed",
      last_name: "Irena",
      full_name: " Irena Fareed",
      description_short:
        "There are things more precious than treasure underwater.",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-11.jpg",
      width: "w-3/5",
      title_size: "text-xl",
      location: {
        city: "Dumaguete City",
        province: "Negros Oriental",
      },
    },
    {
      id: "2",
      full_name: "Gweneth Mahir",
      first_name: "Gweneth",
      last_name: "Mahir",
      description_short:
        "Just because you have stopped sinking doesn't mean you're not still underwater.",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-12.jpg",
      width: "w-2/5",
      title_size: "text-xl",
      location: {
        city: "Dauin",
        province: "Negros Oriental",
      },
    },
    {
      id: "3",
      first_name: "Nurul",
      last_name: "Edelgard",
      full_name: "Nurul Edelgard",
      description_short:
        "Being with him was like being alone underwater - everything was slow; nothing counted; I could not be harmed; I would feel dry and cold when I resurfaced.",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-13.jpg",
      width: "w-4/12",
      title_size: "text-sm",
      location: {
        city: "Moalboal",
        province: "Cebu",
      },
    },
    {
      id: "4",
      full_name: "Kelda Lillemor",
      first_name: "Kelda",
      last_name: "Lillemor",
      description_short: "Being able to breathe underwater would be sweet.",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-14.jpg",
      width: "w-4/12",
      title_size: "text-sm",
      location: {
        city: "Mabini",
        province: "Batangas",
      },
    },
    {
      id: "5",
      full_name: "Kelda Lillemor",
      first_name: "Kvetoslav",
      last_name: "Alannis",
      description_short:
        "It was great. I mean, it's a blast directing underwater stuff.",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-15.jpg",
      width: "w-4/12",
      title_size: "text-sm",
      location: {
        city: "Coron",
        province: "Palawan",
      },
    },
  ]);
  return (
    <View className="flex mt-4 ">
      <FlatList
        data={items}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: any) => (
          <View className="mb-2">
            <PostCard item={item} />
          </View>
        )}
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
