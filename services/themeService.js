import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = '@Theme';

export const ThemeService = {
  async saveTheme(theme) {
    try {
      await AsyncStorage.setItem(THEME_KEY, theme);
    } catch (error) {
      console.warn('Erro ao salvar tema:', error);
    }
  },

  async loadTheme() {
    try {
      const savedTheme = await AsyncStorage.getItem(THEME_KEY);
      return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'light';
    } catch (error) {
      console.warn('Erro ao carregar tema:', error);
      return 'light';
    }
  }
};