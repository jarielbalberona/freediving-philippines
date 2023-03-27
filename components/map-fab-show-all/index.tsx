import { Text, Pressable } from "react-native";
import { Fontisto } from "@expo/vector-icons";

const MapFABShowAll = ({ handleTap }: any) => {
  return (
    <Pressable
      onPress={handleTap}
      className="absolute flex flex-row items-center justify-center w-auto h-12 p-2 px-4 shadow-lg bg-slate-100 rounded-xl right-4 bottom-4"
    >
      <Fontisto
        size={13}
        name="anchor"
        className=" text-slate-100"
        aria-hidden="true"
      />
      <Text className="pl-2">Show All Spots</Text>
    </Pressable>
  );
};

export default MapFABShowAll;
