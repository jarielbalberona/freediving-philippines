import Icon from "@components/icon";
import ServicesData from "@data/services.json";
import { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import { Rating } from "react-native-ratings";

import UserAvatar from "../avatar";

const BuddyCard = ({ buddy }: any) => {
  const [mapped_buddy, setMappedBuddy] = useState({}) as any;

  useEffect(() => {
    const item = {
      ...buddy,
    };
    item.services = buddy.services.map((service_id: number) =>
      ServicesData.find((service: any) => Number(service.id) === service_id)
    );

    setMappedBuddy(item);
  }, [buddy]);

  return (
    <View className="flex w-full p-2 overflow-hidden bg-white ">
      <View className="flex flex-row items-center mx-1 my-2">
        <View className="flex-1">
          <View className="flex flex-row">
            <View className="w-10 h-12">
              <UserAvatar user={mapped_buddy} is_with_details={false} />
            </View>
            <View className="flex justify-center ml-3">
              <View>
                <Text className="text-md">@{mapped_buddy.username}</Text>
              </View>
              <View>
                <Text className="text-md">{mapped_buddy.full_name}</Text>
              </View>
              <View className="flex flex-row items-center w-40">
                <Rating
                  type="star"
                  imageSize={12}
                  startingValue={mapped_buddy.average_rating}
                  readonly
                  onFinishRating={() => console.log("rating completed")}
                />
                <Text className="ml-2">{mapped_buddy.average_rating}</Text>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-row flex-none ">
          <View className="w-12">
            <Icon name="phone" color="#194569" />
          </View>
          <View className="w-12">
            <Icon name="chat" color="#194569" />
          </View>
        </View>
      </View>
      <View className="flex justify-center p-2">
        <View>
          <Text className="mb-2">{mapped_buddy.bio}</Text>
        </View>
      </View>
      <View className="flex justify-center p-2">
        <View>
          <Text className="mb-2">Services</Text>
        </View>
        <View className="flex flex-row flex-wrap w-full">
          {mapped_buddy.services && mapped_buddy.services.length ? (
            mapped_buddy.services.map((service: any) => (
              <View
                className="flex flex-row p-2 px-3 mt-1 mr-1 rounded-full"
                style={{ backgroundColor: service.color }}
              >
                <Icon
                  size={16}
                  name={service.icon}
                  color="#ffffff"
                  className="pr-2"
                />
                <Text className="text-white">{service.name}</Text>
              </View>
            ))
          ) : (
            <View />
          )}
        </View>
      </View>
    </View>
  );
};

export default BuddyCard;
