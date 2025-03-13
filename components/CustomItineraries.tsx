import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { Link } from "expo-router";
import { images } from "@/constants/images";

// Sample itinerary data
const itineraries = [
  {
    id: "1",
    name: "Beachside Escape",
    image: images.varkala,
    rating: 4.8,
  },
  {
    id: "2",
    name: "Hill Station Retreat",
    image: images.ponmudi,
    rating: 4.7,
  },
  {
    id: "3",
    name: "Spiritual Journey",
    image: images.Temple,
    rating: 4.6,
  },
];

export default function CustomItineraries() {
  return (
    <View className="mt-6">
      {/* Header */}
      <Text className="text-black text-2xl font-bold mb-4">
        Custom Itineraries
      </Text>

      {/* Itinerary List */}
      <FlatList
        data={itineraries}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <Link href={`/itineraries/${item.id}`} asChild>
            <TouchableOpacity className="bg-white shadow-md rounded-xl overflow-hidden w-48 mr-4">
              {/* Image */}
              <Image
                source={item.image}
                className="w-full h-28 rounded-t-xl"
                resizeMode="cover"
              />

              {/* Text Details */}
              <View className="p-3">
                <Text className="text-lg font-semibold text-gray-900">
                  {item.name}
                </Text>
                <Text className="text-yellow-500 font-medium">
                  ⭐ {item.rating}
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}
