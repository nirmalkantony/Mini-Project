import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function VideoGallery() {
  const { id } = useLocalSearchParams();

  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-xl font-bold">Videos of Destination {id}</Text>

      <Text className="text-gray-500 mt-4">
        No videos available at the moment.
      </Text>
    </View>
  );
}
