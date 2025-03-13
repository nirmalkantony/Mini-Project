import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function EditProfile() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-lg font-semibold mb-3">Edit Profile</Text>

      {/* Profile Picture */}
      <View className="items-center mb-4">
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          className="w-24 h-24 rounded-full"
        />
      </View>

      {/* Name Input */}
      <Text className="text-gray-600">Name</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-2 mb-3"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      {/* Email Input */}
      <Text className="text-gray-600">Email</Text>
      <TextInput
        className="border border-gray-300 rounded-md p-2 mb-3"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />

      {/* Save Button */}
      <TouchableOpacity
        className="bg-blue-500 p-3 rounded-md"
        onPress={() => router.push("/(tabs)/profile")}
      >
        <Text className="text-white text-center font-semibold">
          Save Changes
        </Text>
      </TouchableOpacity>
    </View>
  );
}
