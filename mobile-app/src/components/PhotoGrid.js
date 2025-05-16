import React from "react";
import { FlatList, Image } from "react-native";

export default function PhotoGrid({ photos }) {
  return (
    <FlatList
      data={photos}
      numColumns={3}
      renderItem={({ item }) => (
        <Image source={{ uri: item }} style={{ width: 100, height: 100 }} />
      )}
    />
  );
}