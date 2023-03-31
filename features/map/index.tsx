import MapBottomSheet from "@components/map-bottom-sheet";
import MapFABListView from "@components/map-fab-list-view";
import MapFABShowAll from "@components/map-fab-show-all";
import { SearchCategories } from "@constants/categories";
import { MapStyle } from "@constants/map-style";
import Buddies from "@data/buddies.json";
import DiveSpots from "@data/dive-spots.json";
import { Fontisto } from "@expo/vector-icons";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Text, Pressable, View, TextInput, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapSearch = () => {
  const mapRef = useRef(null) as any;
  const bottomSheetRef = useRef<BottomSheet>(null);
  const searchRef = useRef() as any;
  const route = useRoute() as any;

  const [search, setSearch] = useState<string>("");
  const [backup_locations, setBackupLocations] = useState<any>([]);
  const [locations, setLocations] = useState<any>([]);
  const [bottom_sheet_active_index, setBottomSheetActiveIndex] = useState(1);
  const [selected_location, setSelectedLocation] = useState([]) as any;

  useEffect(() => {
    const location_ids = [18, 20, 21, 22, 23, 24];

    let filtered_locations = DiveSpots.filter(({ id }) =>
      location_ids.includes(id)
    );

    filtered_locations = DiveSpots.map((location) => {
      const buddies = [] as any;
      const buddied_location = {
        ...location,
      } as any;

      location.buddies.forEach((buddy_id) => {
        buddies.push(Buddies.find((buddy) => buddy.id === buddy_id));
      });
      buddied_location.buddies = buddies;
      return buddied_location;
    });

    setLocations(filtered_locations);
    setBackupLocations(filtered_locations);
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
      <StatusBar
        backgroundColor={
          bottom_sheet_active_index === 1 ? "white" : "transparent"
        }
      />
      <MapView
        provider="google"
        className="z-0 w-full h-full"
        minZoomLevel={5.8}
        maxZoomLevel={20}
        rotateEnabled={false}
        pitchEnabled={false}
        scrollDuringRotateOrZoomEnabled={false}
        onRegionChange={async (region: any, details: any) => {}}
        ref={mapRef}
        region={{
          latitude: 12.892777045049678,
          longitude: 121.80988989,
          latitudeDelta: 20.40915917820612,
          longitudeDelta: 10.050340779125662,
        }}
        showsUserLocation
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
            icon={{
              uri: "https://s3.ap-southeast-1.amazonaws.com/freediving-philippines-assets/icons/map-marker@3x.png",
            }}
            onPress={() => {
              bottomSheetRef.current?.snapToIndex(0);
              setSelectedLocation([location]);
            }}
          />
        ))}
      </MapView>

      <View className="absolute z-10 flex w-full px-2 pt-4 transition duration-300 ease-in-out delay-150 top-10">
        <View>
          <TextInput
            editable={false}
            className="block w-full h-12 px-4 text-black bg-white border border-gray-300 rounded-full shadow-sm sm:text-sm"
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
                className="p-3 m-1 bg-white border border-1 border-slate-200 rounded-3xl"
              >
                <Text>{item.name}</Text>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
      <MapBottomSheet
        locations={selected_location.length ? selected_location : locations}
        bottomSheetRef={bottomSheetRef}
        handleSheetChanges={handleSheetChanges}
        bottom_sheet_active_index={bottom_sheet_active_index}
      />
      {bottom_sheet_active_index === -1 ? (
        <MapFABListView
          handleTap={() => bottomSheetRef.current?.snapToIndex(0)}
        />
      ) : (
        <>
          {selected_location.length ? (
            <MapFABShowAll
              handleTap={() => {
                bottomSheetRef.current?.snapToIndex(0);
                setSelectedLocation([]);
              }}
            />
          ) : null}
        </>
      )}
    </View>
  );
};

export default MapSearch;
