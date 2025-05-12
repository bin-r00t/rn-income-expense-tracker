import { Tabs } from "expo-router";
import { Octicons, Fontisto } from "@expo/vector-icons";

export default function TabsLayout() {
  /** two tabs, home page & settings */
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerTitleStyle: {
            display: "none",
          },
          tabBarIcon: ({ color }) => (
            <Octicons size={24} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="trend"
        options={{
          title: "Trend",
          headerTitleStyle: {
            display: "none",
          },
          tabBarIcon: ({ color }) => (
            <Octicons size={24} name="flame" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          headerTitleStyle: {
            display: "none",
          },
          tabBarIcon: ({ color }) => (
            <Octicons size={24} name="archive" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerTitleStyle: {
            display: "none",
          },
          tabBarIcon: ({ color }) => (
            <Octicons size={24} name="person" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
