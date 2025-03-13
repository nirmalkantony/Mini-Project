import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

// Sample User Data
const user = {
  name: "Bhagya Lekshmi",
  email: "saniyannasunny@example.com",
  location: "Trivandrum, India",
  profilePic: "https://randomuser.me/api/portraits/women/59.jpg", // Placeholder Image
};

export default function ProfileScreen() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView className={`flex-1 ${darkMode ? "bg-black" : "bg-white"} p-5`}>
      {/* Profile Header */}
      <View className="items-center mt-5">
        <Image
          source={{ uri: user.profilePic }}
          className="w-24 h-24 rounded-full border-4 border-gray-300"
        />
        <Text className="text-xl font-semibold mt-3">{user.name}</Text>
        <Text className="text-gray-500">{user.email}</Text>
        <Text className="text-gray-500">{user.location}</Text>

        {/* Edit Profile Button */}
        <TouchableOpacity
          className="mt-4 bg-blue-500 px-4 py-2 rounded-full"
          onPress={() => router.push("/profile/editProfile")}
        >
          <Text className="text-white font-semibold">Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Options List */}
      <View className="mt-6">
        <TouchableOpacity className="flex-row items-center justify-between p-4 bg-gray-100 rounded-lg mb-3">
          <Text className="text-lg">My Preferences</Text>
          <Icon name="chevron-right" size={16} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-between p-4 bg-gray-100 rounded-lg mb-3">
          <Text className="text-lg">Help & Support</Text>
          <Icon name="chevron-right" size={16} color="gray" />
        </TouchableOpacity>

        {/* Dark Mode Toggle */}
        <TouchableOpacity
          className="flex-row items-center justify-between p-4 bg-gray-100 rounded-lg mb-3"
          onPress={() => setDarkMode(!darkMode)}
        >
          <Text className="text-lg">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Text>
          <Icon name={darkMode ? "sun-o" : "moon-o"} size={18} color="gray" />
        </TouchableOpacity>

        {/* Logout Button */}
        <TouchableOpacity className="flex-row items-center justify-between p-4 bg-red-500 rounded-lg">
          <Text className="text-lg text-white">Log Out</Text>
          <Icon name="sign-out" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
