import React, { useState, useEffect, FC } from "react";
import { Text, View } from "react-native";
import UserAvatar from "react-native-user-avatar";

interface IAvatarDetails {
  user: any;
  is_with_details?: boolean;
}

const Avatar = ({ name = "Juan dela Cruz" }) => {
  return (
    <UserAvatar
      name={name}
      className="text-sm"
      size={40}
      style={{}}
      bgColors={["#194569", "#5F84A2", "#91AEC4", "#B7D0E1", "#CADEED"]}
    />
  );
};

const Details = ({ user }: any) => {
  return (
    <View className="flex flex-row justify-center mx-8 my-2">
      <View className="flex flex-col w-10 h-10">
        <Avatar name={user.full_name} />
      </View>
      <View className="flex flex-col justify-center w-full h-10 ml-3">
        <View>
          <Text className="text-md">{user.full_name} </Text>
        </View>
        <View>
          {user.location ? (
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
  is_with_details = true,
}) => {
  if (is_with_details) {
    return <Details user={user} />;
  }

  return <Avatar name={user.full_name} />;
};

export default AvatarDetails;
