import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { images } from "@/constants/images";
import Icon from "react-native-vector-icons/FontAwesome";

const destinations: Record<
  string,
  {
    name: string;
    image: any;
    description: string;
    rating: number;
    location: string;
  }
> = {
  "1": {
    name: "Varkala",
    image: images.varkala,
    description: "Beautiful beaches and cliffs.",
    rating: 4.8,
    location: "Varkala, Trivandrum",
  },
  "2": {
    name: "Ponmudi",
    image: images.ponmudi,
    description: "A scenic hill station with lush greenery.",
    rating: 4.7,
    location: "Ponmudi, Trivandrum",
  },
  "3": {
    name: "Padmanabhaswamy temple",
    image: images.Temple,
    description: "A historical and spiritual place.",
    rating: 4.6,
    location: "Sree Padmanabhaswamy Temple, Trivandrum",
  },
  "4": {
    name: "Museum",
    image: images.museum,
    description: "A historical and spiritual place.",
    rating: 4.6,
    location: "Nil",
  },
  "5": {
    name: "Backwaters",
    image: images.backwater,
    description: "Nil",
    rating: 4.5,
    location: "Nil",
  },
  "6": {
    name: "Museum",
    image: images.museum,
    description: "A historical Place",
    rating: 4.4,
    location: "Nil",
  },
};

export default function Details() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const destination = destinations[String(id)];

  if (!destination) return <Text>Destination not found!</Text>;

  return (
    <View className="flex-1 bg-white">
      <View className="relative">
        <Image
          source={destination.image}
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

      <View className="bg-white -mt-8 rounded-t-3xl p-5">
        <Text className="text-xl font-bold">{destination.name}</Text>
        <View className="flex-row items-center mt-1">
          <Icon name="map-marker" size={16} color="green" />
          <Text className="text-gray-600 ml-1">{destination.location}</Text>
        </View>
        <View className="flex-row items-center mt-1">
          <Icon name="star" size={16} color="#FFD700" />
          <Text className="text-gray-600 ml-1">{destination.rating}</Text>
        </View>

        <View className="flex-row justify-around border-b mt-4 pb-2">
          <TouchableOpacity
            onPress={() => router.push(`/destinations/about?id=${id}`)}
          >
            <Text className="text-green-600 font-bold">About</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push(`/destinations/review?id=${id}`)}
          >
            <Text className="text-gray-400">Review</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push(`/destinations/photo?id=${id}`)}
          >
            <Text className="text-gray-400">Photo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push(`/destinations/video?id=${id}`)}
          >
            <Text className="text-gray-400">Video</Text>
          </TouchableOpacity>
        </View>

        <Text className="text-gray-600 mt-3 leading-6">
          {destination.description}{" "}
          <Text className="text-green-600">Read More</Text>
        </Text>

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
