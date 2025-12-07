import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { router } from "expo-router";
import api from "../api/axios";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = async () => {
    try {
      await api.post("/tasks", { title, description });
      router.back();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={{ marginBottom: 10, borderWidth: 1, padding: 10 }}
      />

      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
}
