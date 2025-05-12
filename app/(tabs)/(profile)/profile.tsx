import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function ProfilePage() {

    return (
        <View className="flex-1">
            {/* portfolio part  */}
            <View className="Portfolio bg-white p-8 my-3">
                <Text>Portfolio</Text>
                <Link href="/edit" className="text-indigo-500 underline text-xl">编辑资料</Link>
            </View>
            <View className="Portfolio bg-white p-8 my-3">
            </View>
        </View>
    )
}