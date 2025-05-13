import TagButton from "@/components/ui/TagButton";
import { View, Text, Pressable, ScrollView } from "react-native";
import { useState } from "react";
import Section from "@/components/ui/Section";
import { FontAwesome } from "@expo/vector-icons";
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
  RadarChart,
} from "react-native-gifted-charts";
import { Picker } from "@react-native-picker/picker";

export default function StatisticsPage() {
  const [activeBtn, setActiveBtn] = useState("Day");
  const [selectedLanguage, setSelectedLanguage] = useState();
  const data = [
    { value: 50, label: "01/01" },
    { value: 80, label: "01/02" },
    { value: 90, label: "01/03" },
    { value: 70, label: "01/04" },
    { value: 33, label: "01/05" },
    { value: 32, label: "01/06" },
    { value: 121, label: "01/07" },
    { value: 12, label: "01/08" },
    { value: 67, label: "01/09" },
    { value: 33, label: "01/10" },
    { value: 99, label: "01/11" },
    { value: 10, label: "01/12" },
  ];

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
      
      <View className="border">
        <Picker
          mode="dropdown"
          dropdownIconColor={"#438883"}
          prompt="test"
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
          }
        >
          <Picker.Item color="#438883" label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>

      <View className="flex-row">
        <LineChart
          data={data}
          areaChart
          backgroundColor={"#fff"}
          color="#438883"
          thickness={3}
          initialSpacing={0}
          hideDataPoints
          hideYAxisText
          hideAxesAndRules
          curved
          isAnimated
          animateOnDataChange
          animationDuration={1000}
          startFillColor={"#438883"}
          endFillColor={"#438883"}
          startOpacity={0.4}
          endOpacity={0.1}
          focusEnabled
          showTextOnFocus
          showStripOnFocus
          showDataPointOnFocus
          showDataPointLabelOnFocus
          focusedDataPointHeight={22}
          focusedDataPointWidth={22}
          focusedDataPointShape="circle"
          focusedDataPointLabelComponent={({
            x,
            y,
          }: {
            x: number;
            y: number;
          }) => {
            return (
              <View className="bg-white rounded-full w-10 h-10">
                <Text className="text-xs text-red-500">{x}</Text>
              </View>
            );
          }}
          onFocus={() => {
            console.log("focus");
          }}
          focusedCustomDataPoint={({ x, y }: { x: number; y: number }) => {
            return (
              <View className="bg-white rounded-full w-10 h-10">
                <Text className="text-xs text-red-500">{x}</Text>
              </View>
            );
          }}
          focusedDataPointColor={"#438883"}
          xAxisLabelTextStyle={{
            color: "#438883",
            fontSize: 12,
          }}
        />
      </View>

      {/* <View>
        <BarChart data={data} />
      </View>  
       <View>
        <PieChart data={data} />
      </View>
      <View>
        <PopulationPyramid
          data={[
            { left: 10, right: 12 },
            { left: 9, right: 8 },
          ]}
        />
      </View>
      <View>
        <RadarChart data={[50, 80, 90, 70]} />
      </View> */}

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
