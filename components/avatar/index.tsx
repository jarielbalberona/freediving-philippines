import React, { useState, useEffect, FC } from "react";
import { Text, View } from "react-native";
import {
  TouchableOpacity,
  TouchableHighlight,
} from "react-native-gesture-handler";
import UserAvatar from "react-native-user-avatar";

interface IAvatarDetails {
  user: any;
  is_with_details?: boolean;
  has_story?: boolean;
  size?: number;
}

const Avatar = ({ name = "Juan dela Cruz", size = 40, has_story = true }) => {
  return (
    <TouchableOpacity className="w-auto 0">
      <View
        className={`rounded-full ${
          has_story ? "border-4 border-blue-500 " : ""
        }`}
      >
        <UserAvatar
          name={name}
          className="text-sm"
          size={size}
          style={{}}
          bgColors={["#194569", "#5F84A2", "#91AEC4", "#B7D0E1", "#CADEED"]}
        />
      </View>
    </TouchableOpacity>
  );
};

const Details = ({ user, size, has_story }: any) => {
  return (
    <View className="flex flex-row justify-center mx-8 my-2">
      <View className="flex flex-col w-10 h-10">
        <Avatar name={user?.full_name} size={size} has_story={has_story} />
      </View>
      <View className="flex flex-col justify-center w-full h-10 ml-3">
        <View>
          <Text className="text-md">{user?.full_name} </Text>
        </View>
        <View>
          {user?.location ? (
            <Text className="font-light">{`${user.location.city}, ${user.location.province}`}</Text>
          ) : (
            <Text />
          )}
        </View>
      </View>
    </View>
  );
};

const AvatarDetails: FC<IAvatarDetails> = ({
  user,
  size = 40,
  is_with_details = true,
  has_story = false,
}) => {
  if (is_with_details) {
    return <Details user={user} size={size} has_story={has_story} />;
  }

  return <Avatar name={user?.full_name} size={size} has_story={has_story} />;
};

export default AvatarDetails;
