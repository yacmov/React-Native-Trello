import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import "../global.css";
import React from "react";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";

const MainLayout = () => {
  return (
    <ThemeProvider value={DarkTheme}>
      <Stack screenOptions={{}}>
        <Stack.Screen name="index" options={{ title: "Todo" }} />
        <Stack.Screen name="details" options={{ title: "details" }} />
      </Stack>
    </ThemeProvider>
  );
};

export default MainLayout;
