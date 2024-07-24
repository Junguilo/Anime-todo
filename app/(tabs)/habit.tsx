import { Text, View, StyleSheet } from "react-native";

export default function Habit() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen. (Habit.)</Text>
      <Text>Tab [Home | Habit |Settings]</Text>
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
