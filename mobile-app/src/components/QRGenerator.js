import React from "react";
import { generateQR } from "../utils/qr";

export default function QRGenerator({ eventId }) {
  return generateQR(eventId);
}