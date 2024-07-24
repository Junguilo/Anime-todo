import { Stack } from "expo-router";

//Layout is to link the folder to our different tabs
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
    </Stack>
  );
}
