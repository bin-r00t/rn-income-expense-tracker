import { Stack } from "expo-router";
import React from "react";

export default function TrendLayout() {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false
            }}
        >
            <Stack.Screen name="statistics" />
        </Stack>
    );
}