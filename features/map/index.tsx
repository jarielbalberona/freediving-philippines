import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import {
  Text,
  Pressable,
  View,
  TextInput,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { SearchCategories } from "../../constants/categories";
import { MapStyle } from "../../constants/map-style";
import DiveSpots from "../../data/dive-spots.json";
import { Fontisto } from "@expo/vector-icons";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import MapFAB from "../../components/map-fab";
import MapBottomSheet from "../../components/map-bottom-sheet";

const MapSearch = () => {
  const mapRef = useRef(null) as any;
  const bottomSheetRef = useRef<BottomSheet>(null);
  const searchRef = useRef() as any;
  const route = useRoute() as any;

  const [search, setSearch] = useState<string>("");
  const [locations, setLocations] = useState<any>([]);
  const [bottom_sheet_active_index, setBottomSheetActiveIndex] = useState(1);

  useEffect(() => {
    const location_ids = [11, 12, 14, 18, 20, 21, 22, 23, 24];

    let filtered_locations = DiveSpots.filter((item) => {
      return location_ids.indexOf(item.id) === -1;
    });

    setLocations(filtered_locations);
    if (route.params?.category_id) {
      const { category_id } = route.params;
      const category = SearchCategories.find((item) => item.id === category_id);
      if (category) {
        // searchRef.current?.setAddressText("Moalboal Sardine");
        setSearch(category.name);
      } else {
        setSearch("");
      }
    }
  }, [route.params]);

  useEffect(() => {
    setMapBounding();
  }, [mapRef]);

  const handleSheetChanges = useCallback(
    (fromIndex: number, toIndex: number) => {
      setBottomSheetActiveIndex(toIndex);
    },
    []
  );

  const setMapBounding = () => {
    mapRef.current.setMapBoundaries({
      northEast: {
        latitude: 23.73398515266952,
        longitude: 127.29163404554129,
      },
      southWest: {
        latitude: 3.3636681832363173,
        longitude: 116.54609218239783,
      },
    });
  };
  return (
    <View className="relative flex w-full h-full">
      <MapView
        provider="google"
        className="z-0 w-full h-full"
        minZoomLevel={5.8}
        maxZoomLevel={20}
        rotateEnabled={false}
        pitchEnabled={false}
        scrollDuringRotateOrZoomEnabled={false}
        onRegionChange={async (region: any, details: any) => {
          console.log("region", region);
          console.log("details", details);
        }}
        ref={mapRef}
        region={{
          latitude: 12.892777045049678,
          longitude: 121.80988989,
          latitudeDelta: 20.40915917820612,
          longitudeDelta: 10.050340779125662,
        }}
        onPress={() => {
          setMapBounding();
        }}
        onMapReady={() => {
          setMapBounding();
        }}
        customMapStyle={MapStyle}
      >
        {locations.map((location: any) => (
          <Marker
            key={`${location.geometry.location.lat}-${location.geometry.location.lng}`}
            coordinate={{
              latitude: location.geometry.location.lat,
              longitude: location.geometry.location.lng,
            }}
            title={location.title}
            description={location.description}
            icon={require("../../assets/icons/map-marker.png")}
          />
        ))}
      </MapView>

      <View
        className={`absolute z-10 flex w-full px-2 pt-4 top-14 transition ease-in-out delay-150 duration-300  ${
          bottom_sheet_active_index === 1 ? "bg-white" : ""
        }`}
      >
        <View>
          <TextInput
            readonly
            className="block w-full h-12 px-4 bg-white border border-gray-300 rounded-full shadow-sm sm:text-sm"
            value={search}
            onChangeText={setSearch}
            placeholder="Explore Freediving"
          />
          {search !== "" ? (
            <Pressable
              onPress={() => setSearch("")}
              className="absolute inset-y-0 flex items-center justify-center p-2 pr-3 pointer-events-none right-2 text-slate-100"
            >
              <Fontisto
                name="close-a"
                className="w-5 h-5 text-slate-100"
                aria-hidden="true"
              />
            </Pressable>
          ) : null}

          {/* <GooglePlacesAutocompleteInput
              search={search}
              setSearchText={setSearch}
              searchRef={searchRef}
            />  */}
        </View>

        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          className="overflow-hidden"
        >
          <View className="flex flex-row m-2">
            {SearchCategories.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => setSearch(item.name)}
                className="p-3 m-1 bg-white shadow-sm rounded-3xl"
              >
                <Text>{item.name}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
      <MapBottomSheet
        locations={locations}
        bottomSheetRef={bottomSheetRef}
        handleSheetChanges={handleSheetChanges}
        bottom_sheet_active_index={bottom_sheet_active_index}
      />
      {bottom_sheet_active_index === -1 ? (
        <MapFAB handleTap={() => bottomSheetRef.current?.snapToIndex(0)} />
      ) : null}
    </View>
  );
};

export default MapSearch;
