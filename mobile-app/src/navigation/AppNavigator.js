import { createStackNavigator } from "@react-navigation/stack";
import CreateEvent from "../screens/CreateEvent";
import QRScanner from "../screens/QRScanner";
import CameraView from "../components/CameraView";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreateEvent" component={CreateEvent} />
      <Stack.Screen name="QRScanner" component={QRScanner} />
      <Stack.Screen name="Camera" component={CameraView} />
    </Stack.Navigator>
  );
}