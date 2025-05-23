import { Stack } from "expo-router";
import "../assets/styles/global.css";
import {
  Inter_900Black,
  Inter_400Regular,
  useFonts,
  Inter_300Light,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_700Bold,
    Inter_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="qq"
        options={{
          presentation: "modal",
        }}
      />
      {/* <Stack.Screen
        name="notification"
        options={{
          headerShown: true,
          title: "通知",
          headerBackground: () => {
            return <View className="h-full w-full bg-[#429690]" />;
          },
          headerTintColor: "white",
          headerBackVisible: false,
          headerBackTitle: "返回",
          headerBackButtonMenuEnabled: false,
        }}
      /> */}
    </Stack>
  );
}
