import { Stack } from "expo-router";
import "../assets/styles/global.css";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="login" options={{ presentation: "modal" }} />
    </Stack>
  );
}
