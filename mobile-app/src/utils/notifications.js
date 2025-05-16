import { Alert } from "react-native";
import PushNotification from "react-native-push-notification";

// Configure push notifications
PushNotification.configure({
  onNotification: (notification) => Alert.alert(notification.title, notification.message),
});

export const sendLocalNotification = (title, message) => {
  PushNotification.localNotification({ title, message });
};