import { Text, View, Image, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import TopDestinations from "@/components/TopDestinations";
import CustomItineraries from "@/components/CustomItineraries";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      >
        {/* Logo */}
        <Image source={icons.logo1} className="w-16 h-14 mt-20 mb-4 mx-auto" />

        {/* Search Bar */}
        <SearchBar
          onPress={() => router.push("/search")}
          placeholder="Search for a Destination"
        />

        {/* Top Destinations */}
        <TopDestinations />

        {/* Custom Itineraries */}
        <View className="mt-4">
          <CustomItineraries />
        </View>
        <Text className="text-dark-100 font-semibold text-2xl mb-3">
          Ente Trivandrum
        </Text>
        <Text className="text-gray-600 text-base">
          Ente Trivandrum is a digital tourism guide dedicated to showcasing the
          rich **cultural and heritage sites** of Thiruvananthapuram. This app
          helps visitors explore historical landmarks, traditional art forms,
          and authentic local experiences.
          {"\n\n"}Using **AI-powered itinerary planning**, it personalizes trips
          based on user preferences, such as **food, cultural experiences, and
          activities**. Integrated into the **Smart City Thiruvananthapuram**
          initiative, it aims to promote local tourism while supporting artisans
          and cultural heritage.
        </Text>
      </ScrollView>
    </View>
  );
}
