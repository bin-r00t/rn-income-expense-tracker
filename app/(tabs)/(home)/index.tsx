import {
  ImageBackground,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import TransactionHistory from "@/components/TransactionHistory";

export default function Index() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <ImageBackground
      source={require("../../../assets/images/rect-bg.png")}
      className="h-80 p-8"
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View className="flex-row justify-between">
          <View className="gap-2">
            <Text className="text-sm text-white font-light">
              Good afternoon,
            </Text>
            <Text className="text-2xl text-white font-bold">
              Enjelina Mofenbenz
            </Text>
          </View>
          <Pressable
            onPress={() => setShowMessage((v) => !v)}
            className="bg-white/20 w-12 h-12 justify-center items-center rounded-lg p-2 relative"
          >
            <Octicons name="bell" size={20} color="white" />
            {showMessage && (
              <View className="dot absolute top-3 right-3 w-3 h-3 rounded-full bg-orange-400"></View>
            )}
          </Pressable>
        </View>
      </SafeAreaView>

      <View className="card rounded-3xl p-6 gap-2 bg-[#2f7e79] shadow-[#2f7e7933] shadow-lg">
        <View className="flex-row items-center gap-2">
          <Text className="text-white text-lg font-bold">Total Balance</Text>
          <Octicons name="eye" size={16} color="white" />
        </View>
        <Text className="text-white font-bold text-3xl">$100,000.00</Text>
        <View className="mt-6 flex-row justify-between">
          <View className="gap-1">
            <View className="flex-row items-center gap-2">
              <View className="bg-white/20 w-8 h-8 items-center justify-center rounded-full p-2">
                <Octicons name="arrow-up" size={16} color="white" />
              </View>
              <Text className="text-white/80 text-sm">Income</Text>
            </View>
            <Text className="text-white text-lg font-bold">$80,000.00</Text>
          </View>

          <View className="gap-1">
            <View className="flex-row items-center gap-2">
              <View className="bg-white/20 w-8 h-8 items-center justify-center rounded-full p-2">
                <Octicons name="arrow-down" size={16} color="white" />
              </View>
              <Text className="text-white/80 text-sm">Expense</Text>
            </View>
            <Text className="text-white text-lg font-bold">$3,000.00</Text>
          </View>
        </View>
      </View>

      <TransactionHistory />
    </ImageBackground>
  );
}
