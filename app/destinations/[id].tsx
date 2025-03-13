import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { images } from "@/constants/images";

const destinations: Record<
  string,
  { name: string; image: any; description: string }
> = {
  "1": {
    name: "Varkala",
    image: images.varkala,
    description: "Beautiful beaches and cliffs.",
  },
  "2": {
    name: "Ponmudi",
    image: images.ponmudi,
    description: "A scenic hill station with lush greenery.",
  },
  "3": {
    name: "Temple",
    image: images.Temple,
    description: "A historical and spiritual place.",
  },
};

export default function Details() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // ✅ Convert `id` explicitly to a string
  const destination = destinations[String(id)];

  if (!destination) return <Text>Destination not found!</Text>;

  return (
    <View className="flex-1 bg-white p-5">
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text className="text-blue-500">← Back</Text>
      </TouchableOpacity>

      {/* Destination Image */}
      <Image
        source={destination.image}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Destination Name */}
      <Text className="text-2xl font-bold mt-4">{destination.name}</Text>

      {/* Destination Description */}
      <Text className="text-lg mt-2">{destination.description}</Text>
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
