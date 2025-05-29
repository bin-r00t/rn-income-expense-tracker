import {
  Dimensions,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";
import TransactionHistory from "@/components/TransactionHistory";
import { useRouter } from "expo-router";
import BalanceCard from "@/components/BalanceCard";
import SendToContact from "@/components/SendToContact";

export default function Index() {
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(false);
  const { width, height } = Dimensions.get("window");

  /** 瘦屏设备，如sony xperia pro-i */
  const thinScreen = height / width > 2.25;

  return (
    <SafeAreaView className="flex-1 bg-neutral-100 justify-center items-center">
      <Button title="Location" onPress={() => router.push("/location")} />
    </SafeAreaView>
  );
}
