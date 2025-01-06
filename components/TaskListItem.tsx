import { View, Text } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const TaskListItem = ({ task }: { task: any }) => {
  return (
    <View className="bg-[#1d2125] p-[8] rounded-md flex-row justify-between">
      <Text className="text-white text-md">{task?.description}</Text>
      <AntDesign name="close" size={16} color="gray" />
    </View>
  );
};

export default TaskListItem;
