import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="">Edit app/index.tsx to edit this screen.</Text>
      <Link href="/details/1" className="text-2xl underline font-bold my-2">
        View Detail 1
      </Link>
      <Text>or</Text>
      <Link
        href={{ pathname: "/details/[id]", params: { id: "2" } }}
        className="text-2xl underline font-bold my-2"
      >
        View Detail 2
      </Link>
      <Text>or</Text>
      <Link href="/login" className="text-2xl underline font-bold my-2">
        View Login
      </Link>
    </View>
  );
}
