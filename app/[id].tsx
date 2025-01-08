import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="p-4">
      <Text className="text-white text-2xl">Id: {id}</Text>
    </View>
  );
};

export default TaskDetails;
