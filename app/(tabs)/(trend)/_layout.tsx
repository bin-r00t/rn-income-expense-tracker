import { FontAwesome } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";

export default function TrendLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="statistics"
        options={{
          title: "Statistics",
          headerRight: () => (
            <Pressable className="flex-row items-center justify-center w-10 h-10 rounded focus-within:bg-gray-100 focus:bg-gray-100 active:bg-gray-100">
              <FontAwesome name="download" size={20} color="black" />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
