import { manipulateAsync } from "expo-image-manipulator";

export const compressImage = async (uri) => {
  const result = await manipulateAsync(
    uri,
    [{ resize: { width: 800 } }], // Resize to 800px width
    { compress: 0.7, format: "jpeg" }
  );
  return result.uri;
};