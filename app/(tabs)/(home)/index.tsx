import {
  Dimensions,
  FlatList,
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

type VenderType =
  | "gmail"
  | "qq"
  | "tencent"
  | "163"
  | "126"
  | "outlook"
  | "microsoft"
  | "exchange"
  | "other";

class Vender {
  name: string;
  key: VenderType;
  icon: any;

  public constructor(name: string, key: VenderType, icon: any) {
    this.name = name;
    this.key = key;
    this.icon = icon;
  }
}

export default function Index() {
  // const { width, height } = Dimensions.get("window");

  const [emailVenders, setEmailVenders] = useState([
    new Vender("Gmail", "gmail", "xxx"),
    new Vender("QQ邮箱", "qq", "xxx"),
    new Vender("腾讯企业邮", "tencent", "xxx"),
    new Vender("126邮箱", "126", "xxx"),
    new Vender("163邮箱", "163", "xxx"),
    new Vender("Outlook", "outlook", "xxx"),
    new Vender("Microsoft 365", "microsoft", "xxx"),
    new Vender("Exchange", "exchange", "xxx"),
    new Vender("其他邮箱", "other", "xxx"),
  ]);

  /** 瘦屏设备，如sony xperia pro-i */
  // const thinScreen = height / width > 2.25;

  const onCreateAccount = () => {
    console.log("on create account...");
  };

  return (
    <SafeAreaView className="flex-1 bg-neutral-100">
      <ScrollView className="">
        <View className="head items-center justify-center py-6 gap-2 border-b border-neutral-200">
          <Text className="text-2xl font-semibold text-neutral-800">
            添加账号
          </Text>
          <Text className="text-neutral-400">请选择要添加的邮箱</Text>
        </View>

        <View className="venders px-10">
          {emailVenders.map((vender) => (
            <EmailVender key={vender.key} vender={vender} />
          ))}
        </View>

        {/* <FlatList
        data={emailVenders}
        renderItem={({ item }) => <EmailVender vender={item} />}
      /> */}

        <View className="foot items-center justify-center p-4">
          <Pressable
            className="bg-neutral-200 w-3/5 p-4 rounded-full"
            onPress={onCreateAccount}
          >
            <Text className="text-neutral-800 text-center">添加账号</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function EmailVender({
  vender,
}: {
  vender: { name: string; icon: any; key: VenderType };
}) {
  const router = useRouter();
  const onPress = () => {
    router.push(`/${vender.key}`);
  };
  return (
    <Pressable
      className="items-center justify-center p-4 flex-row gap-4 border-b border-neutral-200"
      onPress={onPress}
    >
      <View className="w-2/5 items-end">
        <View className="w-12 h-12 rounded-full bg-neutral-300"></View>
      </View>
      <View className="flex-1 pl-4">
        <Text>{vender.name}</Text>
      </View>
    </Pressable>
  );
}
