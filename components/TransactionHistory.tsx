import { useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import Section from "./ui/Section";

export default function TransactionHistory() {
  const [transactionHistory, setTransactionHistory] = useState([
    {
      title: "Transaction 1",
      date: "2021-01-01",
      amount: 10090,
      type: "income",
      logo: require("../assets/images/logos/ali.png"),
    },
    {
      title: "Transaction 2",
      date: "2021-01-01",
      amount: 112,
      type: "expense",
      logo: require("../assets/images/logos/g.png"),
    },
    {
      title: "Transaction 3",
      date: "yesterday",
      amount: 11200,
      type: "expense",
      logo: require("../assets/images/logos/paypal.png"),
    },
    {
      title: "Transaction 4",
      date: "2021-01-01",
      amount: 9889,
      type: "income",
      logo: require("../assets/images/logos/stripe.png"),
    },
    {
      title: "Transaction 5",
      date: "2021-01-01",
      amount: 9889,
      type: "income",
      logo: require("../assets/images/logos/shein.png"),
    },
  ]);
  return (
    <Section title="Transaction History">
      <View className="justify-between gap-2">
        {transactionHistory.map((item) => (
          <TransactionHistoryItem key={item.title} {...item} />
        ))}
      </View>
    </Section>
  );
}

function TransactionHistoryItem({
  title,
  date,
  amount,
  type,
  logo,
}: {
  title: string;
  date: string;
  amount: number;
  type: string;
  logo: any;
}) {
  return (
    <View className="w-full p-2 flex-row items-center justify-between">
      <View className="flex-row gap-5 items-center">
        {logo ? (
          <ImageBackground
            source={logo}
            className="w-12 h-12 rounded-lg"
            resizeMode="contain"
            imageStyle={{
              width: 32,
            }}
          />
        ) : (
          <View className="w-12 h-12 rounded-lg bg-gray-200" />
        )}
        <View className="gap-1">
          <Text className="text-lg font-inter-bold">{title}</Text>
          <Text className="text-sm text-gray-600 font-inter">{date}</Text>
        </View>
      </View>
      <Text
        className={`text-lg font-inter-bold ${
          type === "income" ? "text-green-500" : "text-red-500"
        }`}
      >
        {type === "income" ? "+" : "-"}${amount.toLocaleString()}
      </Text>
    </View>
  );
}
