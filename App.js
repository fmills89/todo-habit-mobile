import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HabitsForm from "./components/Forms/HabitsForm";
import { Colors } from "./constants/Colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <HabitsForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray700,
    alignItems: "center",
    justifyContent: "center",
  },
});
