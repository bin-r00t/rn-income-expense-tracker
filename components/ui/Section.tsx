import { Pressable, View, Text } from "react-native";

type SectionProps = {
  children: React.ReactNode;
  title: string;
  onPress?: () => void;
  headerRight?: () => React.ReactNode;
};

export default function Section({
  children,
  title,
  onPress,
  headerRight,
}: SectionProps) {
  return (
    <View className="gap-2">
      <View className="flex-row justify-between items-center">
        <Text className="text-xl font-inter-bold">{title}</Text>
        {headerRight ? (
          headerRight()
        ) : (
          <Pressable className="p-2 rounded-lg" onPress={onPress}>
            <Text className="text-gray-600 font-inter">See all</Text>
          </Pressable>
        )}
      </View>
      {children}
    </View>
  );
}
