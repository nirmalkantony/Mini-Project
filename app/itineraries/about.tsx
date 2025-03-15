import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function About() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-xl font-bold">About Destination {id}</Text>
      <Text className="text-gray-600 mt-3">
        This is the About page for Destination {id}.
      </Text>
    </View>
  );
}
