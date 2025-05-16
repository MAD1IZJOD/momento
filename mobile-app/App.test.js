import { render } from "@testing-library/react-native";
import App from "./App";

test("Renders login screen by default", () => {
  const { getByPlaceholderText } = render(<App />);
  expect(getByPlaceholderText("Email")).toBeTruthy();
});