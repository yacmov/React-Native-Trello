import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    { description: "First tasks" },
    { description: "Second tasks" },
    { description: "Third tasks" },
  ]);
  return (
    <View className="p-[10] bg-[#101112] rounded-lg">
      <Text className="text-white font-bold text-xl mx-[10] mb-4">TODO</Text>

      {/* The List of Tasks */}
      <FlatList
        data={tasks}
        contentContainerClassName="gap-[5]"
        renderItem={({ item }) => <TaskListItem task={item} />}
      />

      {/* New Task Input */}
    </View>
  );
};

export default TaskList;
