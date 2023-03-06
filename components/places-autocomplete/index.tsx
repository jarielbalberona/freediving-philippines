import { useState, useRef, useEffect } from "react";
import { Text, View, TextInput } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GooglePlacesAutocompleteInput = ({
  search,
  setSearchText,
  searchRef,
}: any) => {
  console.log("g auto", search);
  return (
    <View className="flex">
      <GooglePlacesAutocomplete
        ref={searchRef}
        minLength={2}
        fetchDetails={true}
        debounce={200}
        keyboardShouldPersistTaps={"handled"}
        keepResultsAfterBlur={true}
        enablePoweredByContainer={false}
        listViewDisplayed={false}
        placeholder="Search Freediving Philippines"
        filterReverseGeocodingByTypes={["geocode"]}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log("data", data);
          console.log("details", details);
        }}
        // preProcess={() => "Moalboal Sardine"}
        textInputProps={{
          // editable: false,
          autoFocus: true,
          value: search,
          defaultValue: search,
          onChangeText: setSearchText,
        }}
        // listEmptyComponent={() => (
        //   <View className="w-full bg-white rounded">
        //     <Text>NO RESULTSSS for {search}</Text>
        //   </View>
        // )}
        // predefinedPlaces={[
        //   {
        //     description: "Secret Bay or Manit Muck",
        //     geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
        //   },
        //   {
        //     description: "The Pier",
        //     geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
        //   },
        // ]}
        query={{
          key: "AIzaSyD8ABPtAHyOZe_5JqYx8mZDJS0SQ6u-JqA",
          language: "en",
          components: "country:ph",
        }}
        styles={styles}
      />
    </View>
  );
};

const styles = {
  textInput: {
    height: 42,
    borderRadius: 20,
    color: "#5d5d5d",
    fontSize: 16,
  },
  predefinedPlacesDescription: {
    color: "#1faadb",
  },
};

export default GooglePlacesAutocompleteInput;
