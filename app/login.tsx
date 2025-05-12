import {
  View,
  Text,
  TextInput,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  Platform,
} from "react-native";

export default function Login() {
  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../assets/images/bg.png")}
        className="w-full h-full flex-col justify-center px-8"
        resizeMode="cover"
      >
        <View className="flex-col gap-8">
          <Text className="text-4xl font-bold">Lorem ipsum dolor sit.</Text>
          <Text className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            autem sit deleniti!!
          </Text>
        </View>

        <View className="flex-col my-6 pt-4 gap-6">
          <Text className="text-2xl font-bold">Sign in</Text>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#c0c0c0"
            inputMode="email"
            allowFontScaling={false}
            className="w-full border-none bg-white rounded"
            style={Platform.select({
              android: {
                height: 48,
                textAlignVertical: 'center',
                includeFontPadding: false,
                paddingVertical: 0,
                marginVertical: 0,
              },
              ios: {
                height: 48,
              }
            })}
          />
          <TextInput
            placeholder="Code"
            placeholderTextColor="#c0c0c0"
            allowFontScaling={false}
            className="w-full border-none bg-white rounded"
            style={Platform.select({
              android: {
                height: 48,
                lineHeight: 96,
                textAlignVertical: 'center',
                includeFontPadding: false,
                paddingVertical: 0,
                marginVertical: 0,
              },
              ios: {
                height: 48,
              }
            })}
          />
        </View>

        <View className="flex-col my-6 gap-6">
          <TouchableOpacity
            className="w-full bg-blue-500 rounded-md p-4"
            onPress={() => {
              console.log("Login");
            }}
          >
            <Text className="text-center text-white text-lg font-bold">
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-ful rounded-md"
            onPress={() => {
              console.log("to sign up");
            }}
          >
            <Text className="text-center text-gray-800 text-lg font-bold">
              No Account? Join in
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center justify-center px-8 my-4 gap-4">
          <TouchableOpacity
            className="w-32 bg-gray-400 rounded-md p-4"
            onPress={() => {
              console.log("Login");
            }}
          >
            <Text className="text-center text-white text-lg font-bold">G</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-32 bg-gray-400 rounded-md p-4"
            onPress={() => {
              console.log("Login");
            }}
          >
            <Text className="text-center text-white text-lg font-bold">F</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-32 bg-gray-400 rounded-md p-4"
            onPress={() => {
              console.log("Login");
            }}
          >
            <Text className="text-center text-white text-lg font-bold">T</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}
