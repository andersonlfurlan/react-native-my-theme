import React, { useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { loadTheme, toggleTheme, selectTheme } from './store/themeSlice';

function HomeScreen() {
  const dispatch = useDispatch();
  const mode = useSelector(selectTheme);
  const isDark = mode === "dark";
  const theme = styles.getTheme(isDark);

  // Carrega o tema salvo ao iniciar
  useEffect(() => {
    dispatch(loadTheme());
  }, [dispatch]);

  return (
    <View
      style={[styles.container, { backgroundColor: theme.backgroundColor }]}
    >
      <Text style={{ color: theme.color }}>
        Tema atual: {mode.toUpperCase()}
      </Text>
      <Button 
        title="Alternar Tema" 
        onPress={() => dispatch(toggleTheme())}
      />
    </View>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
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
