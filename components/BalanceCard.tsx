import { Octicons } from "@expo/vector-icons";
import { View, Text, Dimensions } from "react-native";

export default function BalanceCard() {
  const { width, height } = Dimensions.get("window");

  /** 瘦屏设备，如sony xperia pro-i */
  const thinScreen = height / width > 2.25;

  return (
    <View
      className={`card rounded-3xl p-6 gap-2 bg-[#2f7e79] shadow-lg ${
        thinScreen ? "mt-10 gap-4" : ""
      }`}
    >
      <View className="flex-row items-center gap-3">
        <Text
          className={`text-white text-lg font-inter ${
            thinScreen ? "text-xl" : ""
          }`}
        >
          Total Balance
        </Text>
        <Octicons name="eye" size={16} color="white" />
      </View>
      <Text
        className={`text-white font-inter-bold text-3xl ${
          thinScreen ? "text-4xl" : ""
        }`}
      >
        $100,000.00
      </Text>
      <View className="mt-6 flex-row justify-between">
        <View className="gap-2">
          <View className="flex-row items-center gap-2">
            <View className="bg-white/20 w-8 h-8 items-center justify-center rounded-full p-2">
              <Octicons name="arrow-up" size={16} color="white" />
            </View>
            <Text
              className={`text-white/80 text-sm ${
                thinScreen ? "text-base" : ""
              }`}
            >
              Income
            </Text>
          </View>
          <Text
            className={`text-white text-lg font-inter-black ${
              thinScreen ? "text-xl" : ""
            }`}
          >
            $80,000.00
          </Text>
        </View>

        <View className="gap-2">
          <View className="flex-row items-center gap-2">
            <View className="bg-white/20 w-8 h-8 items-center justify-center rounded-full p-2">
              <Octicons name="arrow-down" size={16} color="white" />
            </View>
            <Text
              className={`text-white/80 text-sm ${
                thinScreen ? "text-base" : ""
              }`}
            >
              Expense
            </Text>
          </View>
          <Text
            className={`text-white text-lg font-inter-black ${
              thinScreen ? "text-xl" : ""
            }`}
          >
            $3,000.00
          </Text>
        </View>
      </View>
    </View>
  );
}
