import { Stack } from "expo-router";
import "./globals.css";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <StatusBar hidden={true} />

      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="destinations/[id]"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="itineraries/[id]"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
