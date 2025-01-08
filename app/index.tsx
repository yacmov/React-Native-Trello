import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import TaskBoard from "@/components/TaskBoard";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <TaskBoard />
    </View>
  );
};

export default HomeScreen;
