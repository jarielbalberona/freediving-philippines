import CachedImage from "expo-cached-image";
import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
const HorizontalGallery = ({ navigation }: any) => {
  const [items, setItems] = useState([
    {
      id: "1",
      name: "Dive spots",
      description_short: "Explore the oceans",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-6.jpg",
      width: "w-3/5",
      title_size: "text-xl",
    },
    {
      id: "2",
      name: "Buddies",
      description_short: "Never dive alone",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-7.jpg",
      width: "w-2/5",
      title_size: "text-xl",
    },
    {
      id: "3",
      name: "Creators",
      description_short: "Some desc",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-8.jpg",
      width: "w-4/12",
      title_size: "text-sm",
    },
    {
      id: "4",
      name: "Marketplace",
      description_short: "Some desc",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-9.jpg",
      width: "w-4/12",
      title_size: "text-sm",
    },
    {
      id: "5",
      name: "Community",
      description_short: "Some desc",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-10.jpg",
      width: "w-4/12",
      title_size: "text-sm",
    },
  ]);
  return (
    <View className="flex mt-2">
      <FlatList
        data={items}
        horizontal
        scrollEnabled
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: any) => (
          <View className="m-2">
            <CachedImage
              className="w-36 h-36"
              source={{
                uri: item.image,
              }}
              cacheKey={`${item.id}-thumb`}
              placeholderContent={
                <View>
                  <Text>Loading image...</Text>
                </View>
              }
            />
          </View>
        )}
        keyExtractor={(item: any) => item.id}
      />
    </View>
  );
};

export default HorizontalGallery;
