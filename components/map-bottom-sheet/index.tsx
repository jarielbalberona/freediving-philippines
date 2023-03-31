import HorizontalGallery from "@components/horizontal-gallery";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import { useMemo, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Rating } from "react-native-ratings";

const MapBottomSheet = ({
  bottomSheetRef,
  handleSheetChanges,
  locations,
  bottom_sheet_active_index,
}: any) => {
  const navigation = useNavigation() as any;
  const snapPoints = useMemo(() => ["48%", "78%"], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      enablePanDownToClose
      snapPoints={snapPoints}
      onAnimate={handleSheetChanges}
    >
      <BottomSheetFlatList
        initialNumToRender={3}
        data={locations}
        keyExtractor={(i: any) => i.geometry.location.lat}
        renderItem={({ item }: any) => (
          <View className="mx-2">
            <View className="w-full pl-2 mr-20">
              <Text className="text-base font-medium">{item.title}</Text>
              <Text className="text-sm">{item.description}</Text>
            </View>
            <View className="mt-2">
              <View className="flex">
                <View className="flex flex-row items-center justify-center w-40">
                  <Rating
                    type="heart"
                    ratingCount={5}
                    imageSize={24}
                    startingValue={5}
                    readonly
                    onFinishRating={() => console.log("rating completed")}
                  />
                  <Text className="ml-2">5</Text>
                </View>
              </View>
              <View />
            </View>
            <View className="flex w-full mt-0">
              <HorizontalGallery />
            </View>
            <View className="">
              <View className="mx-2">
                <Text className="text-lg">Buddies</Text>
              </View>
              <View className="flex flex-row flex-wrap m-2 ">
                {item.buddies.slice(0, 3).map((buddy: any) => (
                  <View
                    key={buddy.id}
                    className="flex flex-row items-center w-auto px-4 py-2 my-1 ml-0 mr-1 rounded-full bg-slate-800 "
                  >
                    <Text className="text-white">{`${buddy.first_name} ${buddy.last_name}`}</Text>
                    <View className="flex flex-row items-center ml-2">
                      <Rating
                        type="star"
                        ratingBackgroundColor="red"
                        ratingColor="red"
                        tintColor="rgb(30, 41, 59)"
                        ratingCount={1}
                        imageSize={24}
                        startingValue={1}
                        readonly
                        onFinishRating={() => console.log("rating completed")}
                      />
                      <Text className="text-white">{buddy.average_rating}</Text>
                    </View>
                  </View>
                ))}
                {item.buddies.length > 3 ? (
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("BuddiesStack", {
                        screen: "Buddies",
                        params: { spot: item },
                      });
                    }}
                    className="flex flex-row items-center w-auto px-4 py-2 my-1 ml-0 mr-1 rounded-full bg-slate-800 "
                  >
                    <Text className="text-white">View All +</Text>
                  </TouchableOpacity>
                ) : null}
              </View>
            </View>
            <View className="w-full h-2 my-2 bg-slate-100" />
          </View>
        )}
      />
    </BottomSheet>
  );
};

export default MapBottomSheet;
