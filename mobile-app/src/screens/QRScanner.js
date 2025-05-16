import React from "react";
import { RNCamera } from "react-native-camera";
import { useNavigation } from "@react-navigation/native";

export default function QRScanner() {
  const navigation = useNavigation();

  const onQRScan = ({ data }) => {
    if (data.startsWith("EVENT_")) {
      navigation.navigate("Camera", { eventId: data });
    }
  };

  return (
    <RNCamera
      style={{ flex: 1 }}
      onBarCodeRead={onQRScan}
      captureAudio={false}
    />
  );
}