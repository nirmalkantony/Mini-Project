import { View, Image, ScrollView, Text } from "react-native";
import { images } from "@/constants/images";

const topDestinations = [
  { id: 1, image: images.varkala, name: "Beach Paradise" },
  { id: 2, image: images.ponmudi, name: "Mountain Escape" },
  { id: 3, image: images.Temple, name: "City Lights" },
];

export default function TopDestinations() {
  return (
    <View className="mt-6">
      <Text className="text-red-500 text-base font-semibold px-5">
        Top Destinations
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        {topDestinations.map((item) => (
          <View
            key={item.id}
            className="m-2 bg-gray-800 rounded-xl overflow-hidden"
          >
            <Image
              source={item.image}
              style={{ width: 160, height: 120, borderRadius: 15 }}
              resizeMode="cover"
            />
            <Text className="text-white text-center mt-2">{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
