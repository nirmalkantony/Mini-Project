import { View, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import { images } from "@/constants/images";
import { Link, useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";

const topDestinations = [
  { id: 1, image: images.varkala, name: "Varkala", type: "Beach", rating: 4.5 },
  {
    id: 2,
    image: images.ponmudi,
    name: "Ponmudi",
    type: "Hill Station",
    rating: 4.7,
  },
  {
    id: 3,
    image: images.Temple,
    name: "Temple",
    type: "Cultural Site",
    rating: 4.3,
  },
  {
    id: 4,
    image: images.museum,
    name: "Napier Museum",
    type: "Heritage Site",
    rating: 4.4,
  },
];

export default function TopDestinations() {
  const router = useRouter();

  return (
    <View className="mt-6">
      <Text className="text-dark-100 font-semibold px-3 text-2xl mb-2">
        Top Destinations
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {topDestinations.map((item) => (
          <View key={item.id} className="m-2">
            <Link href={`/destinations/${item.id}`} asChild>
              <TouchableOpacity className=" rounded-xl overflow-hidden">
                <Image
                  source={item.image}
                  style={{ width: 160, height: 170, borderRadius: 15 }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </Link>

            <View className="flex-row items-center justify-between mt-2 px-2">
              <Text className="text-dark-100 text-lg font-semibold">
                {item.name}
              </Text>
              <View className="flex-row items-center">
                <Icon name="star" size={16} color="#FFD700" />
                <Text className="text-dark-100 text-sm font-medium ml-1">
                  {item.rating}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 text-sm px-2">{item.type}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
