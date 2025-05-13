import { Pressable, Text } from "react-native";

type TagButtonProps = {
  title: string;
  active: boolean;
  onPress: () => void;
};

export default function TagButton({ title, active, onPress }: TagButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      className={`text-gray-400 rounded-lg px-6 py-3 ${
        active ? "bg-[#438883]" : ""
      }`}
    >
      <Text className={`${active ? "text-white" : ""}`}>{title}</Text>
    </Pressable>
  );
}
