import { View, Text, FlatList, TextInput, Button } from "react-native";
import React, { useState } from "react";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: "First tasks" },
    { id: 2, description: "Second tasks" },
    { id: 3, description: "Third tasks" },
  ]);
  const [newTask, setNewTask] = useState("");

  const createTask = () => {
    setTasks([...tasks, { description: newTask }]);
    setNewTask("");
  };

  return (
    <View className="p-[10] bg-[#101112] rounded-lg gap-[10]">
      <Text className="text-white font-bold text-xl mx-[10]">TODO</Text>

      {/* The List of Tasks */}
      <FlatList
        data={tasks}
        contentContainerClassName="gap-[5]"
        renderItem={({ item }) => <TaskListItem task={item} />}
      />

      {/* New Task Input */}
      <TextInput
        value={newTask}
        onChangeText={setNewTask}
        placeholder="New Task"
        placeholderTextColor={"gray"}
        className="text-white font-bold bg-[#1d2125] rounded-md p-[10]"
      />
      <Button title="Add task" onPress={createTask} />
    </View>
  );
};

export default TaskList;
