import { DarkTheme, DefaultTheme, Theme } from "@react-navigation/native";

export const AppLightTheme: Theme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: "#F2F2F2",
    dark: "#0f0f0f",
    primary: "#FF4500",
    error: "#B00020",
    textSecondary: "#a8a7a6c7", // Cool gray for better modern look
    textOposite: "#FFFFFF",
    success: "#2ECC71",
    fail: "#E74C3C",
    warning: "#F4A261",
    white: "#FFFFFF",
    darkCard: "#1E1E1E",
  },
  fonts: {
    ...DefaultTheme.fonts,
  },
};

export const AppDarkTheme: Theme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: "#FF4500",
    background: "#0f0f0f",
    dark: "#0f0f0f",
    card: "#1E1E1E",
    darkCard: "#1E1E1E",
    error: "#B00020",
    textSecondary: "#c6c5c4c0", // Lighter cool gray for dark mode
    textOposite: "#000000",
    success: "#2ECC71",
    fail: "#E74C3C",
    warning: "#F4A261",
    white: "#FFFFFF",
  },
  fonts: {
    ...DarkTheme.fonts,
  },
};
