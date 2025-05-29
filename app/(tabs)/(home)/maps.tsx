import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";

export default function Maps() {
  const { latitude, longitude } = useLocalSearchParams();
  console.log(latitude, longitude);

  return (
    <SafeAreaView className="flex-1 bg-neutral-100">
      <View className="p-4">
        <Text>
          Maps: {latitude}, {longitude}
        </Text>

        {/* <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
      </View>
    </SafeAreaView>
  );
}
