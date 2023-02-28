import React, { useState } from "react";
import { Text, View, Image } from "react-native";

const Highlights = ({ navigation }: any) => {
  const [items, setItems] = useState([
    {
      name: "Dive spots",
      description_short: "Lorem ipsum",
      image:
        "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
    },
    {
      name: "Islands",
      description_short: "Lorem ipsum islands",
      image:
        "https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80",
    },
  ]);
  return (
    <View className="flex-1 vh-10  bg-red">
      {items.map((item, index) => (
        <View key={index} className="bg-white rounded-lg shadow-lg">
          <Image
            source={{
              uri: item.image,
            }}
            className="rounded-t-lg"
          />
          <View className="p-6">
            <Text className="font-bold mb-2 text-2xl text-purple-800">
              {item.name}
            </Text>
            <Text className="text-purple-700 mb-2">
              {item.description_short}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Highlights;
