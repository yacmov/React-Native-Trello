import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import "../global.css";
import TaskList from "@/components/TaskList";

const MainLayout = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-[10]">
        <TaskList />
      </View>
    </SafeAreaView>
  );
};

export default MainLayout;
