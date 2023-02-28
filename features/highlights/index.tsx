import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground } from "react-native";

const Highlights = ({ navigation }: any) => {
  const [items, setItems] = useState([
    {
      name: "Dive spots",
      description_short: "Explore the oceans",
      image: "https://images.unsplash.com/photo-1573378617548-c82dd01a3fb0",
      width: "w-3/5",
      title_size: "text-xl",
    },
    {
      name: "Buddies",
      description_short: "Never dive alone",
      image: "https://images.unsplash.com/photo-1665682597003-f31e65b59efd",
      width: "w-2/5",
      title_size: "text-xl",
    },
    {
      name: "Creators",
      description_short: null,
      image: "https://images.unsplash.com/photo-1674786272813-dd04d4843752",
      width: "w-4/12",
      title_size: "text-sm",
    },
    {
      name: "Marketplace",
      description_short: null,
      image: "https://images.unsplash.com/photo-1583022816895-319291f05079",
      width: "w-4/12",
      title_size: "text-sm",
    },
    {
      name: "Community",
      description_short: null,
      image: "https://images.unsplash.com/photo-1669469053207-f2d5b1a8fd59",
      width: "w-4/12",
      title_size: "text-sm",
    },
  ]);
  return (
    <View className="flex flex-row flex-wrap">
      {items.map((item, index) => (
        <View key={index} className={`${item.width}`}>
          <View className="m-1 h-28">
            <ImageBackground
              className="flex w-full h-full overflow-hidden border border-gray-100 rounded-3xl"
              source={{
                uri: item.image,
              }}
              resizeMode="cover"
            >
              <View className="flex justify-center h-full p-4">
                <Text className={`font-bold text-white ${item.title_size}`}>
                  {item.name}
                </Text>
                {item.description_short ? (
                  <Text className="mb-2 text-white">
                    {item.description_short}
                  </Text>
                ) : null}
              </View>
            </ImageBackground>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Highlights;
