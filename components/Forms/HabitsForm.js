import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "../../constants/Colors";
import HabitsList from "../Lists/HabitsList";
import { db } from "../../firebaseConfig";
import {
  doc,
  collection,
  query,
  onSnapshot,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const HabitsForm = () => {
  const [habits, setHabits] = useState([]);
  const [input, setInput] = useState("");
  console.log(habits);

  function changeHabitHandler(enteredText) {
    setInput(enteredText);
  }

  const addHabitHandler = async () => {
    if (input === "") {
      return alert("Please enter a valid habit!");
    } else {
      await addDoc(collection(db, "habits"), {
        text: input,
        completed: false,
      });
      setInput("");
    }
  };

  useEffect(() => {
    const q = query(collection(db, "habits"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const habitsArr = [];
      QuerySnapshot.forEach((doc) => {
        habitsArr.push({ ...doc.data(), id: doc.id });
      });
      setHabits(habitsArr);
    });
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.title}>Action Items - Habits</Text>
      <TextInput
        placeholder="Enter a habit"
        onChangeText={changeHabitHandler}
        value={input}
        style={styles.textInput}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Add Habit" onPress={addHabitHandler} />
        </View>
      </View>
      <View style={styles.habitContainer}>
        <FlatList
          data={habits}
          renderItem={(itemData) => {
            return (
              <HabitsList habit={itemData.item.text} id={itemData.item.id} />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
};

export default HabitsForm;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    padding: 60,
    backgroundColor: Colors.primary700,
    borderRadius: 6,
    width: "100%",
  },
  textInput: {
    borderWidth: 1,
    borderColor: Colors.primary400,
    backgroundColor: Colors.primary100,
    borderRadius: 6,
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    backgroundColor: Colors.gray700,
    borderRadius: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 15,
  },
  habitContainer: {
    flex: 4,
  },
});
