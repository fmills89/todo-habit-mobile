import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const HabitsList = ({ habit, toggleComplete, deleteHabit }) => {
  return (
    // <View style={style.listContainer}>
    <View style={style.habitItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && style.pressedItem}
      >
        <Text style={style.habitText}>{habit}</Text>
      </Pressable>
    </View>
    // </View>
  );
};

export default HabitsList;

const style = StyleSheet.create({
  habitItem: {
    margin: 8,
    padding: 4,
    borderRadius: 6,
    backgroundColor: Colors.gray700,
  },
  pressedItem: {
    opacity: 0.5,
  },
  habitText: {
    color: "white",
    padding: 8,
  },
});
