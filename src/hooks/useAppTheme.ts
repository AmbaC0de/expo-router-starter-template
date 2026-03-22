import { useColorScheme } from "react-native";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectTheme, setThemeMode, ThemeMode } from "@/store/slices/theme";

export const useAppTheme = () => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector(selectTheme);
  const systemColorScheme = useColorScheme();

  const theme = mode === "system" ? (systemColorScheme ?? "light") : mode;

  const updateTheme = (newMode: ThemeMode) => {
    dispatch(setThemeMode(newMode));
  };

  return {
    mode,
    theme,
    isDark: theme === "dark",
    setTheme: updateTheme,
  };
};
