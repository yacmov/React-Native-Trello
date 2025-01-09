import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import "../global.css";
import React from "react";
import { ThemeProvider, DarkTheme } from "@react-navigation/native";
import Realm from "@/providers/Realm";

const MainLayout = () => {
  return (
    <ThemeProvider value={DarkTheme}>
      <Realm>
        <Stack screenOptions={{}}>
          <Stack.Screen name="index" options={{ title: "Todo" }} />
          <Stack.Screen name="details" options={{ title: "details" }} />
        </Stack>
      </Realm>
    </ThemeProvider>
  );
};

export default MainLayout;
