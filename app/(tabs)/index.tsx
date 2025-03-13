import { Text, View, Image, ScrollView, TextInput } from "react-native";
import { Link } from "expo-router";
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import TopDestinations from "@/components/TopDestinations";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image
          source={icons.logo1}
          className="w-16 h-14 mt-20 mb-4 mx-auto"
        ></Image>
        <View>
          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="Search for a Destination"
          />
        </View>
        <TopDestinations />
      </ScrollView>
    </View>
  );
}
