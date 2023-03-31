import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Text, View, ImageBackground, Pressable } from "react-native";
const Highlights = () => {
  const navigation = useNavigation() as any;
  const [items, setItems] = useState([
    {
      name: "Dive spots",
      description_short: "Explore the oceans",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-1.jpg",
      width: "w-3/5",
      title_size: "text-xl",
      navigate_details: {
        screen: "Map",
        category_id: 1,
      },
    },
    {
      name: "Buddies",
      description_short: "Never dive alone",
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-2.jpg",
      width: "w-2/5",
      title_size: "text-xl",
      navigate_details: {
        screen: "Map",
        category_id: 2,
      },
    },
    {
      name: "Creators",
      description_short: null,
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-3.jpg",
      width: "w-4/12",
      title_size: "text-sm",
      navigate_details: {
        screen: "Map",
        category_id: 3,
      },
    },
    {
      name: "Marketplace",
      description_short: null,
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-4.jpg",
      width: "w-4/12",
      title_size: "text-sm",
      navigate_details: {
        screen: "Marketplace",
        category_id: null,
      },
    },
    {
      name: "Community",
      description_short: null,
      image:
        "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/images/uwu/uwu-5.jpg",
      width: "w-4/12",
      title_size: "text-sm",
      navigate_details: {
        screen: "Community",
        category_id: null,
      },
    },
  ]);
  return (
    <View className="flex flex-row flex-wrap bg-white">
      {items.map((item, index) => (
        <View key={index} className={`${item.width}`}>
          <Pressable
            onPress={() => {
              navigation.navigate("MapStack", item.navigate_details);
            }}
          >
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
          </Pressable>
        </View>
      ))}
    </View>
  );
};

export default Highlights;
