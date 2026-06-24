import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectTheme, setThemeMode, ThemeMode } from "@/store/slices/theme";
import { AppDarkTheme, AppLightTheme } from "@/theme/colors";
import { Theme } from "expo-router/react-navigation";
import { ColorSchemeName } from "react-native";
import { useColorScheme } from "react-native";

const getAppTheme = (
  mode: ThemeMode,
  systemColorScheme: ColorSchemeName,
): Theme => {
  if (mode === "system") {
    return systemColorScheme === "dark" ? AppDarkTheme : AppLightTheme;
  }

  return mode === "dark" ? AppDarkTheme : AppLightTheme;
};

export const useAppTheme = () => {
  const dispatch = useAppDispatch();
  const { mode } = useAppSelector(selectTheme);
  const systemColorScheme = useColorScheme();
  const appScheme = mode === "system" ? systemColorScheme : mode;

  const appTheme = getAppTheme(mode, systemColorScheme);

  const updateTheme = (newMode: ThemeMode) => {
    dispatch(setThemeMode(newMode));
  };

  return {
    mode,
    setTheme: updateTheme,
    appTheme,
    appScheme,
  };
};
