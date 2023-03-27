import { useMemo } from "react";
import { Text, View } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import HorizontalGallery from "../../components/horizontal-gallery";
import { Rating, AirbnbRating } from "react-native-ratings";

const MapBottomSheet = ({
  bottomSheetRef,
  handleSheetChanges,
  locations,
  bottom_sheet_active_index,
}: any) => {
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
              <View></View>
            </View>
            <View className="flex w-full mt-0">
              <HorizontalGallery />
            </View>
            <View>
              <View className="mx-2">
                <Text className="text-lg">Buddies</Text>
              </View>
              <View className="flex flex-row m-2">
                {item.buddies.map((buddy: any) => (
                  <View className="px-4 py-2 mr-2 rounded-full bg-slate-800">
                    <Text className="text-white">{buddy?.name}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View className="w-full h-2 my-2 bg-slate-100"></View>
          </View>
        )}
      />
    </BottomSheet>
  );
};

export default MapBottomSheet;
