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
            <Pressable>
              <Text>
                <FontAwesome name="download" size={20} color="black" />
              </Text>
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
