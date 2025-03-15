import { View, Image, Text, TouchableOpacity, FlatList } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { images } from "@/constants/images";
import SearchBar from "@/components/SearchBar";

const destinations = [
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
    image: images.waterfall,
    name: "Waterfall",
    type: "Nature",
    rating: 4.6,
  },
  {
    id: 5,
    image: images.backwater,
    name: "Backwaters",
    type: "Lake",
    rating: 4.8,
  },
  {
    id: 6,
    image: images.museum,
    name: "Historic Museum",
    type: "Heritage Site",
    rating: 4.2,
  },
];

export default function SearchScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View className="flex-1 bg-white items-center pt-6 px-5 ">
      <View className=" mt-5 mb-5">
        <SearchBar placeholder="Search for a Destination" onPress={() => {}} />
      </View>

      {filteredDestinations.length === 0 ? (
        <Text className="text-center text-gray-500 mt-6 text-lg">
          No destinations found.
        </Text>
      ) : (
        <FlatList
          data={filteredDestinations}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 12,
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ width: "48%", marginBottom: 12 }}
              onPress={() => router.push(`/destinations/${item.id}`)}
            >
              <View className="bg-gray-200 rounded-xl overflow-hidden">
                <Image
                  source={item.image}
                  style={{ width: "100%", height: 140 }}
                  resizeMode="cover"
                />
              </View>

              <View className="mt-2 p-2">
                <View className="flex-row justify-between items-center">
                  <Text className="text-dark-100 text-lg font-semibold">
                    {item.name}
                  </Text>
                  <View className="flex-row items-center">
                    <Icon name="star" size={14} color="#FFD700" />
                    <Text className="text-dark-100 text-sm font-medium ml-1">
                      {item.rating}
                    </Text>
                  </View>
                </View>

                <Text className="text-gray-500 text-sm">{item.type}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
