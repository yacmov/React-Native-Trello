import { StatusBar } from "expo-status-bar";
import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import TaskBoard from "@/components/TaskBoard";

const MainLayout = () => {
  return (
    <View className="flex-1 bg-white">
      <TaskBoard />
      <StatusBar style="light" />
    </View>
  );
};

export default MainLayout;
