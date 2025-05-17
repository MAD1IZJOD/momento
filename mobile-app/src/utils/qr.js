import QRCode from "react-native-qrcode-svg";

export const generateQR = (eventId) => (
  <QRCode value={eventId} size={200} />
);

export const validateQR = (data) => {
  return /^EVENT_[a-zA-Z0-9]{20}$/.test(data); // Validate event ID format
};