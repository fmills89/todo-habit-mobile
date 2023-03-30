import { StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const TrashButton = ({ deleteItem }) => {
  return (
    <Ionicons
      name="trash-bin-outline"
      size={20}
      style={style.trashButton}
      onPress={deleteItem}
    />
  );
};

export default TrashButton;

const style = StyleSheet.create({
  trashButton: {
    color: "white",
    padding: 6,
  },
});
