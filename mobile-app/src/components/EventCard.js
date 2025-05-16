import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../assets/styles/global";

export default function EventCard({ event }) {
  return (
    <View style={globalStyles.container}>
      <Text>Event ID: {event.eventId}</Text>
      <Text>Photos Remaining: {50 - event.photoCount}</Text>
    </View>
  );
}