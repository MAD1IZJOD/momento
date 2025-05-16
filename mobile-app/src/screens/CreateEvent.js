import React, { useContext } from "react";
import { View, Button, Image } from "react-native";
import { EventContext } from "../context/EventContext";
import { generateQR } from "../utils/qr";

export default function CreateEvent() {
  const { currentEvent, startEvent } = useContext(EventContext);

  return (
    <View>
      <Button title="Start Event" onPress={startEvent} />
      {currentEvent?.qrCode && (
        <Image source={{ uri: currentEvent.qrCode }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}