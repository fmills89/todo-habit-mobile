import { View, Text } from "react-native";
import React from "react";

const HabitsList = ({ habit, toggleComplete, deleteHabit }) => {
  return (
    <View>
      <Text>{habit}</Text>
    </View>
  );
};

export default HabitsList;
