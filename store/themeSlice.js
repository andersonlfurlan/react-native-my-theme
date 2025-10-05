import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ThemeService } from '../services/themeService';

// Async Thunks
export const loadTheme = createAsyncThunk(
  'theme/loadTheme',
  async () => {
    const theme = await ThemeService.loadTheme();
    return theme;
  }
);

export const toggleTheme = createAsyncThunk(
  'theme/toggleAndSave',
  async (_, { getState }) => {
    const currentMode = getState().theme.mode;
    const newMode = currentMode === 'light' ? 'dark' : 'light';
    await ThemeService.saveTheme(newMode);
    return newMode;
  }
);

const initialState = {
  mode: "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadTheme.fulfilled, (state, action) => {
        state.mode = action.payload;
      })
      .addCase(toggleTheme.fulfilled, (state, action) => {
        state.mode = action.payload;
      });
  },
  selectors: {
    selectTheme: (state) => state.mode,
  },
});

export const { selectTheme } = themeSlice.selectors;
export default themeSlice.reducer;
