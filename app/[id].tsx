import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useObject } from "@realm/react";
import { Task } from "@/models/Task";
import { BSON } from "realm";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();

  const task = useObject<Task>(Task, new BSON.ObjectID(id as string));

  if (!task) {
    return <Text>Not found</Text>;
  }

  return (
    <View className="p-4">
      <Text className="text-white text-2xl">{task.description}</Text>
    </View>
  );
};

export default TaskDetails;
