import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { images } from "@/constants/images";
import { Link, useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome"; // FontAwesome for star icon

const itineraries = [
  { id: "1", name: "Beachside Escape", image: images.varkala, rating: 4.8 },
  { id: "2", name: "Hill Station Retreat", image: images.ponmudi, rating: 4.7 },
  { id: "3", name: "Spiritual Journey", image: images.Temple, rating: 4.6 },
  { id: "4", name: "Foodies Delight", image: images.food, rating: 4.6 },
];

export default function CustomItineraries() {
  const router = useRouter();

  return (
    <View className="mt-6">
      {/* Title */}
      <Text className="text-dark-100 font-semibold px-2 text-2xl mb-2 -mt-5 py-0">
        Custom Itineraries
      </Text>

      {/* Itineraries List */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {itineraries.map((item) => (
          <View key={item.id} className="m-2">
            <Link href={`/itineraries/${item.id}`} asChild>
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 15,
                  overflow: "hidden",
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  elevation: 5,
                }}
              >
                <Image
                  source={item.image}
                  style={{ width: 160, height: 170, borderRadius: 15 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </Link>

            {/* Name */}
            <Text className="text-dark-100 text-lg font-semibold mt-2 px-2">
              {item.name}
            </Text>

            {/* Rating Below Name */}
            <View className="flex-row items-center px-2 mt-1">
              <Icon name="star" size={16} color="#FFD700" />
              <Text className="text-dark-100 text-sm font-medium ml-1">
                {item.rating}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        className="bg-light-100 py-3 px-6 rounded-lg mt-4 mx-4"
        onPress={() => router.push("/chatbot")} // Navigate to chatbot.tsx
      >
        <Text className="text-white text-center text-lg font-semibold">
          Plan Your Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
