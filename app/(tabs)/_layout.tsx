import { Tabs } from "expo-router";
import { Octicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function TabsLayout() {
  /** two tabs, home page & settings */
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerTitleStyle: {
            display: "none",
          },
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center relative">
              <Octicons
                size={20}
                name="home"
                color={focused ? "#2f7e79" : color}
              />
              <View
                className={`absolute -bottom-2 h-1 w-1 rounded-full ${
                  focused ? "bg-[#2f7e79]" : "bg-transparent"
                }`}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(trend)"
        options={{
          title: "Trend",
          headerTitleStyle: {
            display: "none",
          },
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center relative">
              <Octicons
                size={20}
                name="flame"
                color={focused ? "#2f7e79" : color}
              />
              <View
                className={`absolute -bottom-2 h-1 w-1 rounded-full ${
                  focused ? "bg-[#2f7e79]" : "bg-transparent"
                }`}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(wallet)"
        options={{
          title: "Wallet",
          headerTitleStyle: {
            display: "none",
          },
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center relative">
              <Octicons
                size={20}
                name="archive"
                color={focused ? "#2f7e79" : color}
              />
              <View
                className={`absolute -bottom-2 h-1 w-1 rounded-full ${
                  focused ? "bg-[#2f7e79]" : "bg-transparent"
                }`}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          headerTitleStyle: {
            display: "none",
          },
          tabBarIcon: ({ color, focused }) => (
            <View className="items-center relative">
              <Octicons
                size={20}
                name="person"
                color={focused ? "#2f7e79" : color}
              />
              <View
                className={`absolute -bottom-2 h-1 w-1 rounded-full ${
                  focused ? "bg-[#2f7e79]" : "bg-transparent"
                }`}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
