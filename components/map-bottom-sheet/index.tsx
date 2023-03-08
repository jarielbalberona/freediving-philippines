import { useMemo } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import HorizontalGallery from "../../components/horizontal-gallery";
import { Rating, AirbnbRating } from "react-native-ratings";

const MapBottomSheet = ({
  bottomSheetRef,
  handleSheetChanges,
  locations,
  bottom_sheet_active_index,
}: any) => {
  const snapPoints = useMemo(() => ["40%", "77%"], []);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      enablePanDownToClose
      snapPoints={snapPoints}
      onAnimate={handleSheetChanges}
    >
      <BottomSheetFlatList
        data={locations}
        keyExtractor={(i: any) => i.geometry.location.lat}
        renderItem={({ item }: any) => (
          <View>
            <View className="pl-2 mr-20 ">
              <Text className="text-base font-medium">{item.title}</Text>
              <Text className="text-sm">{item.description}</Text>
            </View>
            <View className="mt-2">
              <View className="flex w-32 ">
                <Rating
                  type="heart"
                  ratingCount={5}
                  imageSize={24}
                  startingValue={5}
                  readonly
                  onFinishRating={() => console.log("rating completed")}
                />
              </View>
            </View>
            <View className="mt-0">
              <HorizontalGallery />
            </View>
            <View className="w-full h-2 my-2 bg-slate-100"></View>
          </View>
        )}
      />
    </BottomSheet>
  );
};

export default MapBottomSheet;
