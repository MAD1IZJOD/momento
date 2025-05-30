import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/context/AuthContext";
import { EventProvider } from "./src/context/EventContext";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <AuthProvider>
      <EventProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </EventProvider>
    </AuthProvider>
  );
}
