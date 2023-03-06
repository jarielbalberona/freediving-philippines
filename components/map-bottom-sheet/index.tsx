import { useMemo } from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

const MapBottomSheet = ({
  bottomSheetRef,
  handleSheetChanges,
  locations,
  bottom_sheet_active_index,
}: any) => {
  const snapPoints = useMemo(() => ["40%", "95%"], []);
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
        contentContainerStyle={
          bottom_sheet_active_index === 1
            ? styles.contentContainerOpen
            : styles.contentContainerClosed
        }
        renderItem={({ item }: any) => (
          <View className="flex flex-row items-center pb-4 m-2 shadow-md">
            <View className="pr-2">
              <Image
                className="w-16 h-16"
                source={require("../../assets/icons/freediving-logo.png")}
              />
            </View>
            <View className="pl-2 mr-20 ">
              <Text className="text-base font-medium">{item.title}</Text>
              <Text className="text-sm">{item.description}</Text>
            </View>
          </View>
        )}
      />
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  contentContainerOpen: {
    marginTop: 110,
  },
  contentContainerClosed: {
    marginTop: 0,
  },
});

export default MapBottomSheet;
