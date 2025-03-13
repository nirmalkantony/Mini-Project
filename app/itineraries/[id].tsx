import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { images } from "@/constants/images";

const itineraries: Record<
  string,
  { name: string; image: any; description: string }
> = {
  "1": {
    name: "Backwaters Escape",
    image: images.backwater,
    description: "A peaceful journey through Kerala's backwaters.",
  },
  "2": {
    name: "Hill Station Retreat",
    image: images.ponmudi,
    description: "Explore the misty hills and tea plantations.",
  },
  "3": {
    name: "Beachside Bliss",
    image: images.varkala,
    description: "Relax on the golden sands and enjoy the sea breeze.",
  },
};

export default function ItineraryDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const itinerary = itineraries[String(id)];

  if (!itinerary) return <Text>Itinerary not found!</Text>;

  return (
    <View className="flex-1 bg-white p-5">
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text className="text-blue-500">← Back</Text>
      </TouchableOpacity>

      {/* Itinerary Image */}
      <Image source={itinerary.image} style={styles.image} resizeMode="cover" />

      {/* Itinerary Name */}
      <Text className="text-2xl font-bold mt-4">{itinerary.name}</Text>

      {/* Itinerary Description */}
      <Text className="text-lg mt-2">{itinerary.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
});
