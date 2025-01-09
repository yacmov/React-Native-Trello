import { View, Text, Pressable } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import Task from "@/models/Task";
import { useRealm } from "@realm/react";

const TaskListItem = ({ task }: { task: Task }) => {
  const realm = useRealm();

  const deleteTask = () => {
    realm.write(() => {
      realm.delete(task);
    });
  };

  return (
    <Link href={`/${task._id}`} asChild>
      <Pressable className="bg-[#1d2125] p-[8] rounded-md flex-row justify-between">
        <Text className="text-white text-md">{task?.description}</Text>
        <AntDesign onPress={deleteTask} name="close" size={16} color="gray" />
      </Pressable>
    </Link>
  );
};

export default TaskListItem;
