import React, { useContext } from "react";
import { Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function Settings() {
  const { logout } = useContext(AuthContext);
  return <Button title="Log Out" onPress={logout} />;
}