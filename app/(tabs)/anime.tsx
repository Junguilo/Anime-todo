import { Text, View, StyleSheet } from "react-native";

export default function Anime() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen. (Anime.)</Text>
      <Text>Tab [Home | Habit | Anime |Settings]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
