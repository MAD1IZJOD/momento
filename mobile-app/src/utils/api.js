import axios from "axios";
import { API_BASE_URL } from "../config/constants";

axios.defaults.baseURL = API_BASE_URL;

export const createEvent = async (userId) => {
  return axios.post("/createEvent", { userId });
};

export const uploadPhoto = async (eventId, photoUri) => {
  const formData = new FormData();
  formData.append("photo", {
    uri: photoUri,
    type: "image/jpeg",
    name: "photo.jpg",
  });
  return axios.post(`/uploadPhoto?eventId=${eventId}`, formData);
};