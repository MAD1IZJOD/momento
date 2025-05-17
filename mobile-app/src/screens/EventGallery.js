import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { storage } from "../config/firebase";

export default function EventGallery({ route }) {
  const [photos, setPhotos] = useState([]);
  const { eventId } = route.params;

  useEffect(() => {
    const fetchPhotos = async () => {
      const storageRef = storage.ref(`events/${eventId}`);
      const files = await storageRef.listAll();
      const urls = await Promise.all(files.items.map((item) => item.getDownloadURL()));
      setPhotos(urls);
    };
    fetchPhotos();
  }, []);

  return (
    <View>
      {photos.length > 0 ? (
        <FlatList data={photos} renderItem={({ item }) => <Image source={{ uri: item }} />} />
      ) : (
        <Text>No photos yet!</Text>
      )}
    </View>
  );
}