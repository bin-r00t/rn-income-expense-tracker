import { Stack } from "expo-router";
import React from "react";

export default function WalletLayout() {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false
            }}
        >
            <Stack.Screen name="wallet" />
        </Stack>
    );
}