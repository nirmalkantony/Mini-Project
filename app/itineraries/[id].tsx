import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter, Link } from "expo-router";
import { images } from "@/constants/images";
import Icon from "react-native-vector-icons/FontAwesome";

const itineraries = {
  "1": {
    name: "Beachside Escape",
    image: images.varkala,
    description:
      "A relaxing beach getaway with scenic views and local seafood.",
    rating: 4.9,
    locations: ["Varkala Beach", "Kappil Beach", "Edava Cliff"],
    duration: "3 Days / 2 Nights",
    budget: "₹7,000 - ₹10,000 per person",
  },
  "2": {
    name: "Hilltop Adventure",
    image: images.ponmudi,
    description: "Trek through Ponmudi's lush hills and waterfalls.",
    rating: 4.7,
    locations: ["Ponmudi Hills", "Meenmutty Waterfalls", "Golden Valley"],
    duration: "2 Days / 1 Night",
    budget: "₹5,000 - ₹8,000 per person",
  },
  "3": {
    name: "Cultural Tour",
    image: images.Temple,
    description: "Explore ancient temples and heritage sites.",
    rating: 4.8,
    locations: [
      "Padmanabhaswamy Temple",
      "Kuthiramalika Palace",
      "Attukal Temple",
    ],
    duration: "2 Days / 1 Night",
    budget: "₹3,000 - ₹6,000 per person",
  },
  "4": {
    name: "Foodies Dream Tour",
    image: images.food,
    description: "Explore ancient temples and heritage sites.",
    rating: 4.8,
    locations: ["Good Morning Hotel", "Zam Zam Hotel", "Malabar Quissa"],
    duration: "2 Days / 1 Night",
    budget: "₹3,000 - ₹6,000 per person",
  },
};

export default function ItineraryDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const itinerary = itineraries[id as keyof typeof itineraries];

  if (!itinerary) return <Text>Itinerary not found!</Text>;

  return (
    <View className="flex-1 bg-white">
      {/* Image Section */}
      <View className="relative">
        <Image
          source={itinerary.image}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Icon name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <View className="bg-white -mt-8 rounded-t-3xl p-5">
        {/* Itinerary Info */}
        <Text className="text-xl font-bold">{itinerary.name}</Text>

        {/* Locations */}
        <View className="mt-2">
          <Icon name="map-marker" size={16} color="green" />
          <Text className="text-gray-600 ml-1">
            {itinerary.locations.join(" • ")}
          </Text>
        </View>

        {/* Rating */}
        <View className="flex-row items-center mt-1">
          <Icon name="star" size={16} color="#FFD700" />
          <Text className="text-gray-600 ml-1">{itinerary.rating}</Text>
        </View>

        {/* Duration */}
        <View className="flex-row items-center mt-1">
          <Icon name="clock-o" size={16} color="blue" />
          <Text className="text-gray-600 ml-1">{itinerary.duration}</Text>
        </View>

        {/* Budget */}
        <View className="flex-row items-center mt-1">
          <Icon name="money" size={16} color="orange" />
          <Text className="text-gray-600 ml-1">{itinerary.budget}</Text>
        </View>

        {/* Tabs Navigation */}
        <View className="flex-row justify-around border-b mt-4 pb-2">
          <Link
            href={`/itineraries/about?id=${id}`}
            className="text-green-600 font-bold"
          >
            About
          </Link>
          <Link href={`/itineraries/review?id=${id}`} className="text-gray-400">
            Review
          </Link>
          <Link href={`/itineraries/photo?id=${id}`} className="text-gray-400">
            Photo
          </Link>
          <Link href={`/itineraries/video?id=${id}`} className="text-gray-400">
            Video
          </Link>
        </View>

        {/* Description */}
        <Text className="text-gray-600 mt-3 leading-6">
          {itinerary.description}{" "}
          <Text className="text-green-600">Read More</Text>
        </Text>

        {/* Favorite Button */}
        <TouchableOpacity className="bg-green-600 py-3 rounded-lg mt-5">
          <Text className="text-white text-center text-lg font-semibold">
            Favourite Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 20,
  },
});
