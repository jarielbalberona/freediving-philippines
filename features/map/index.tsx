import React, { useState, useEffect, useRef } from "react";
import { Text, Pressable, View, TextInput, ScrollView } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { SearchCategories } from "../../constants/categories";
import DiveSpots from "../../data/dive-spots.json";
import GooglePlacesAutocompleteInput from "../../components/places-autocomplete";
const MapSearch = () => {
  const mapRef = useRef(null) as any;
  const searchRef = useRef() as any;
  const route = useRoute() as any;
  const [search, setSearch] = useState<string>("");
  const [locations, setLocations] = useState<any>([]);

  useEffect(() => {
    console.log("DiveSpots", DiveSpots);
    setLocations(DiveSpots);
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
    console.log("search", search);
  }, [search]);

  useEffect(() => {
    console.log("locations", locations);
  }, [locations]);

  useEffect(() => {
    setMapBounding();
  }, [mapRef]);

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
    <View className="flex w-full h-full ">
      <View className="relative ">
        <MapView
          provider="google"
          className="z-0 w-full h-full"
          minZoomLevel={5.8}
          maxZoomLevel={20}
          rotateEnabled={false}
          pitchEnabled={false}
          scrollDuringRotateOrZoomEnabled={false}
          onRegionChange={async (region, details) => {
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
            />
          ))}
        </MapView>
        <View className="absolute z-10 flex w-full p-2 top-14">
          <View>
            <TextInput
              className="block w-full h-12 px-4 bg-white border border-gray-300 rounded-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={search}
              onChangeText={setSearch}
              placeholder="Explore Freediving"
            />
            {/* <GooglePlacesAutocompleteInput
              search={search}
              setSearchText={setSearch}
              searchRef={searchRef}
            /> */}
          </View>
          <ScrollView
            horizontal
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            className="overflow-hidden"
          >
            {search === "" ? (
              <View className="flex flex-row m-2">
                {SearchCategories.map((item) => (
                  <Pressable
                    key={item.id}
                    onPress={() => setSearch(item.name)}
                    className="p-3 m-1 bg-white rounded-3xl"
                  >
                    <Text>{item.name}</Text>
                  </Pressable>
                ))}
              </View>
            ) : null}
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default MapSearch;
