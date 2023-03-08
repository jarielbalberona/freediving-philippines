import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image } from "react-native";

const HorizontalGallery = ({ navigation }: any) => {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Dive spots",
      description_short: "Explore the oceans",
      image: "https://images.unsplash.com/photo-1573378617548-c82dd01a3fb0",
      width: "w-3/5",
      title_size: "text-xl",
    },
    {
      id: "2",
      name: "Buddies",
      description_short: "Never dive alone",
      image: "https://images.unsplash.com/photo-1665682597003-f31e65b59efd",
      width: "w-2/5",
      title_size: "text-xl",
    },
    {
      id: "3",
      name: "Creators",
      description_short: "Some desc",
      image: "https://images.unsplash.com/photo-1674786272813-dd04d4843752",
      width: "w-4/12",
      title_size: "text-sm",
    },
    {
      id: "4",
      name: "Marketplace",
      description_short: "Some desc",
      image: "https://images.unsplash.com/photo-1583022816895-319291f05079",
      width: "w-4/12",
      title_size: "text-sm",
    },
    {
      id: "5",
      name: "Community",
      description_short: "Some desc",
      image: "https://images.unsplash.com/photo-1669469053207-f2d5b1a8fd59",
      width: "w-4/12",
      title_size: "text-sm",
    },
  ]);
  return (
    <View className="flex mt-2">
      <FlatList
        data={items}
        horizontal
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: any) => (
          <View className="m-2">
            <Image
              className="w-36 h-36"
              source={require("../../assets/icons/freediving-logo.png")}
            />
          </View>
        )}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default HorizontalGallery;
