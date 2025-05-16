import React, { createContext, useState, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { createEvent } from "../utils/api";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [currentEvent, setCurrentEvent] = useState(null);

  const startEvent = async () => {
    if (!user) return;
    try {
      const { eventId, qrCode } = await createEvent(user.uid);
      setCurrentEvent({ eventId, qrCode, photosRemaining: 50 });
    } catch (error) {
      console.error("Event creation failed:", error);
    }
  };

  return (
    <EventContext.Provider value={{ currentEvent, startEvent }}>
      {children}
    </EventContext.Provider>
  );
};