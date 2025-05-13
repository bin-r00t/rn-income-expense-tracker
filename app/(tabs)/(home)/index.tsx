import {
  Dimensions,
  ImageBackground,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
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

  const handlePress = () => {
    setShowMessage((v) => !v);
    router.push("/notification");
  };

  return (
    <View className="flex-1">
      <StatusBar barStyle={thinScreen ? "dark-content" : "light-content"} />
      <ImageBackground
        source={require("../../../assets/images/rect-bg.png")}
        className={`h-80 p-6 ${thinScreen ? "h-[20rem]" : ""}`}
        resizeMode="cover"
      >
        <SafeAreaView className={thinScreen ? "mt-6" : ""}>
          <View className="flex-row justify-between">
            <View className="gap-2">
              <Text className="text-sm text-white font-inter-light">
                Good afternoon,
              </Text>
              <Text className="text-2xl text-white font-inter-bold">
                Enjelina Mofenbenz
              </Text>
            </View>
            <Pressable
              onPress={handlePress}
              className="bg-white/20 w-12 h-12 justify-center items-center rounded-lg p-2 relative"
            >
              <Octicons name="bell" size={20} color="white" />
              {showMessage && (
                <View className="dot absolute top-3 right-3 w-3 h-3 rounded-full bg-orange-400"></View>
              )}
            </Pressable>
          </View>
        </SafeAreaView>

        <BalanceCard />
      </ImageBackground>

      <ScrollView
        className={Platform.OS === "ios" ? "mt-28" : "mt-20"}
        contentContainerClassName="px-6 pb-10 gap-2"
      >
        <TransactionHistory />
        <SendToContact />
      </ScrollView>
    </View>
  );
}
