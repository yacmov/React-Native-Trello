import { View, Text, Pressable } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";

const TaskListItem = ({ task }: { task: any }) => {
  return (
    <Link href={`/${task.id}`} asChild>
      <Pressable className="bg-[#1d2125] p-[8] rounded-md flex-row justify-between">
        <Text className="text-white text-md">{task?.description}</Text>
        <AntDesign name="close" size={16} color="gray" />
      </Pressable>
    </Link>
  );
};

export default TaskListItem;
