import { View, Text, Pressable } from "react-native";

export default function TransactionHistory() {
  return (
    <View className="mt-6 gap-2">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl font-bold">Transaction History</Text>
        <Pressable className="p-2 rounded-lg">
          <Text className="text-gray-600">See all</Text>
        </Pressable>
      </View>
      <View className="flex-row justify-between">
        <Text>Income</Text>
        <Text>Expense</Text>
      </View>
    </View>
  );
}
