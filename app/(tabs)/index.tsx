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
        <Image source={icons.logo1} className="w-16 h-10 mt-10 mb-6 mx-auto" />

        <SearchBar
          onPress={() => router.push("/search")}
          placeholder="Search for a Destination"
        />

        <TopDestinations />

        <View className="mt-2 ">
          <CustomItineraries />
        </View>
        <Text className="text-dark-100 font-semibold text-2xl mb-2 mt-6 px-2 py-1">
          Ente Trivandrum
        </Text>
        <Text className="text-gray-600 text-base px-3">
          Ente Trivandrum is a digital tourism guide dedicated to showcasing the
          rich **cultural and heritage sites** of Thiruvananthapuram. This app
          helps visitors explore historical landmarks, traditional art forms,
          and authentic local experiences.
          {"\n\n"}Using **AI-powered itinerary planning**, it personalizes trips
          based on user preferences, such as **food, cultural experiences, and
          activities**. Integrated into the **Smart City Thiruvananthapuram**
          initiative, it aims to promote local tourism while supporting artisans
          and cultural heritage.
          {"\n\n\n\n\n\n"}
        </Text>
      </ScrollView>
    </View>
  );
}
