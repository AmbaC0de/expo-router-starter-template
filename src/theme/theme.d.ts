import "expo-router/react-navigation";
import { OpaqueColorValue } from "react-native";

type ColorValue = string | OpaqueColorValue;

// Define the standard colors expected by React Navigation
type StandardThemeColors = {
  primary: ColorValue;
  background: ColorValue;
  card: ColorValue;
  text: ColorValue;
  border: ColorValue;
  notification: ColorValue;
};

// Define your custom colors here
type CustomThemeColors = {
  primaryMuted: ColorValue;
  error: ColorValue;
  textSecondary: ColorValue;
  textOposite: ColorValue;
  success: ColorValue;
  fail: ColorValue;
  warning: ColorValue;
  dark: ColorValue;
  darkCard: ColorValue;
  white: ColorValue;
  // Add other custom colors here
};

const FontWeights = [
  "normal",
  "bold",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
] as const;
type FontWeightsType = (typeof FontWeights)[number];

declare module "expo-router/react-navigation" {
  export interface Theme {
    dark: boolean;
    colors: StandardThemeColors & CustomThemeColors;
    fonts: {
      regular: {
        fontFamily: string;
        fontWeight: FontWeightsType;
      };
      medium: {
        fontFamily: string;
        fontWeight: FontWeightsType;
      };
      bold: {
        fontFamily: string;
        fontWeight: FontWeightsType;
      };
      heavy: {
        fontFamily: string;
        fontWeight: FontWeightsType;
      };
    };
  }

  export function useTheme(): Theme;
}
