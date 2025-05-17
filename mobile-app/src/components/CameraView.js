import React from "react";
import { RNCamera } from "react-native-camera";
import { uploadPhoto } from "../utils/api";

export default function CameraView({ route, navigation }) {
  const { eventId } = route.params;

  const takePicture = async (camera) => {
    const options = { quality: 0.7, base64: true };
    const data = await camera.takePictureAsync(options);
    await uploadPhoto(eventId, data.uri);
    navigation.goBack();
  };

  return (
    <RNCamera
      style={{ flex: 1 }}
      captureAudio={false}
    >
      {({ camera }) => (
        <Button title="Capture" onPress={() => takePicture(camera)} />
      )}
    </RNCamera>
  );
}