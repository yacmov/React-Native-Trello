import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TaskList from "./TaskList";

const TaskBoard = () => {
  return (
    // <View style={{ padding: 10, flex: 1 }}>
    <View className="p-10 flex-1">
      <LinearGradient
        colors={["#8711c1", "#2472fc"]}
        style={StyleSheet.absoluteFill}
      />
      <SafeAreaView>
        <TaskList />
      </SafeAreaView>
    </View>
  );
};

export default TaskBoard;
