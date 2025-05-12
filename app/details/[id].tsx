import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function DetailsPage() {
    const { id } = useLocalSearchParams();
    
    return (
        <View>
            <Text>Details Page {id}</Text>
        </View>
    );
}