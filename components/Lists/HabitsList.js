import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { db } from "../../firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
import { Colors } from "../../constants/Colors";
import TrashButton from "../UI/TrashButton";

const HabitsList = ({ habit, id, toggleComplete }) => {
  const deleteHabit = async (id) => {
    console.log(id);
    if (id === undefined) {
      alert("Habit ID cannot be found!");
    } else {
      await deleteDoc(doc(db, "habits", id));
    }
  };

  return (
    <View style={style.habitItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        style={({ pressed }) => pressed && style.pressedItem}
      >
        <Text style={style.habitText}>{habit}</Text>
      </Pressable>
      <TrashButton deleteItem={() => deleteHabit(id)} />
    </View>
  );
};

export default HabitsList;

const style = StyleSheet.create({
  habitItem: {
    margin: 8,
    padding: 4,
    borderRadius: 6,
    backgroundColor: Colors.gray700,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pressedItem: {
    opacity: 0.5,
  },
  habitText: {
    color: "white",
    padding: 8,
  },
});
