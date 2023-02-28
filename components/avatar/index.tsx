import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import UserAvatar from "@muhzi/react-native-user-avatar";

const AvatarDetails = ({ item }: any) => {
  return (
    <View className="flex flex-row justify-center mx-8 my-2">
      <View className="flex flex-col w-10 h-10">
        <UserAvatar
          userName="John Samuel"
          className="text-sm"
          size={40}
          backgroundColor="#0be881"
          src=""
          active
        />
      </View>
      <View className="flex flex-col justify-center w-full h-10 ml-3">
        <View>
          <Text className="text-md">John Samuel</Text>
        </View>
        <View>
          <Text className="font-light">Panglao, Bohol</Text>
        </View>
      </View>
    </View>
  );
};

export default AvatarDetails;
