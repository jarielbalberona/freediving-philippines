import { Text, Pressable } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const MapFABListView = ({ handleTap }: any) => {
  return (
    <Pressable
      onPress={handleTap}
      className="absolute flex flex-row items-center justify-center w-auto h-12 p-2 px-4 bg-white rounded-xl right-4 bottom-4"
    >
      <Fontisto
        size={13}
        name="list-2"
        className=" text-slate-100"
        aria-hidden="true"
      />
      <Text className="pl-2">List View</Text>
    </Pressable>
  );
};

export default MapFABListView;