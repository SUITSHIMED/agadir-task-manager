import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import { router } from "expo-router";
import api from "../api/axios";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTasks(res.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Add Task" onPress={() => router.push("/add-task")} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>Status: {item.statu}</Text>
          </View>
        )}
      />
    </View>
  );
}
