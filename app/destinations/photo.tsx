import { View, Text, Image, FlatList } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { images } from "@/constants/images";

const photoGallery: Record<string, any[]> = {
  "1": [images.varkala, images.varkala],
  "2": [images.ponmudi, images.ponmudi],
  "3": [images.Temple, images.Temple],
  "4": [images.museum, images.museum],
  "5": [images.backwater, images.backwater],
};

export default function PhotoGallery() {
  const { id } = useLocalSearchParams();
  const photos = photoGallery[String(id)] || [];

  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-xl font-bold">Photos of Destination {id}</Text>

      {photos.length > 0 ? (
        <FlatList
          data={photos}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <Image
              source={item}
              style={{ width: "100%", height: 200, marginVertical: 10 }}
            />
          )}
        />
      ) : (
        <Text className="text-gray-500 mt-4">No photos available.</Text>
      )}
    </View>
  );
}
