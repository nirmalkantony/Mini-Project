import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import { getBotResponse } from "@/utils/getBotResponse";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim().length === 0) return;

    const userMessage = { text: input, isUser: true };
    const botMessage = { text: getBotResponse(input), isUser: false };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.message,
              item.isUser ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Type a message..."
          style={styles.input}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", padding: 10 },
  message: { padding: 10, borderRadius: 8, marginVertical: 5, maxWidth: "75%" },
  userMessage: { alignSelf: "flex-end", backgroundColor: "#4CAF50" },
  botMessage: { alignSelf: "flex-start", backgroundColor: "#ddd" },
  messageText: { color: "#fff" },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 80,
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
  },
  sendText: { color: "#fff", fontWeight: "bold" },
});
