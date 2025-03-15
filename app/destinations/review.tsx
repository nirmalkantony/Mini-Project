import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import { useLocalSearchParams } from "expo-router";

export default function Review() {
  const { id } = useLocalSearchParams();
  const [reviews, setReviews] = useState<{ text: string; user: string }[]>([]);
  const [input, setInput] = useState("");

  const submitReview = () => {
    if (input.trim().length === 0) return;

    const newReview = { text: input, user: "Anonymous" };
    setReviews([...reviews, newReview]);
    setInput("");
  };

  return (
    <View className="flex-1 bg-white p-5">
      <Text className="text-xl font-bold">Reviews for Destination {id}</Text>

      <FlatList
        data={reviews}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View className="border-b py-2">
            <Text className="font-semibold">{item.user}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />

      <View className="flex-row items-center mt-4">
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Write a review..."
          className="flex-1 border p-2 rounded"
        />
        <TouchableOpacity
          className="bg-green-600 px-4 py-2 ml-2 rounded"
          onPress={submitReview}
        >
          <Text className="text-white">Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
