import TagButton from "@/components/ui/TagButton";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useState } from "react";
import Section from "@/components/ui/Section";
import { FontAwesome } from "@expo/vector-icons";
export default function StatisticsPage() {
  const [activeBtn, setActiveBtn] = useState("Day");

  const onPress = (title: string) => {
    setActiveBtn(title);
  };
  return (
    <ScrollView contentContainerClassName="bg-white flex-1 px-6 pb-10 gap-2">
      <View className="my-2 flex-row justify-center gap-2">
        <TagButton
          title="Day"
          active={activeBtn === "Day"}
          onPress={() => {
            onPress("Day");
          }}
        />
        <TagButton
          title="Week"
          active={activeBtn === "Week"}
          onPress={() => {
            onPress("Week");
          }}
        />
        <TagButton
          title="Month"
          active={activeBtn === "Month"}
          onPress={() => {
            onPress("Month");
          }}
        />
        <TagButton
          title="Year"
          active={activeBtn === "Year"}
          onPress={() => {
            onPress("Year");
          }}
        />
      </View>
      <View>{/* selector  */}</View>
      <View>{/* chart  */}</View>

      <Section title="Statistics" headerRight={SortButton}>
        <View>
          <Text>Total</Text>
          <Text>100</Text>
        </View>
      </Section>
    </ScrollView>
  );
}

const SortButton = () => {
  return (
    <Pressable>
      <FontAwesome name="sort" size={18} color="#888" />
    </Pressable>
  );
};
