import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function HomeScreen() {
  const { mode, toggleTheme } = useTheme();
  const isDark = mode === "dark";
  const theme = styles.getTheme(isDark);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={{ color: theme.color }}>
        Tema atual: {mode.toUpperCase()}
      </Text>
      <Button title="Alternar Tema" onPress={toggleTheme} />
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <HomeScreen />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  getTheme(isDark) {
    return {
      backgroundColor: isDark ? "#000" : "#fff",
      color: isDark ? "#fff" : "#000",
    };
  },
});
