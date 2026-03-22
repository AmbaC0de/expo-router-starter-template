import { HapticManager } from "@/utils/haptics";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import React, { PropsWithChildren } from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import { RectButton } from "react-native-gesture-handler";

type ButtonProps = PropsWithChildren<{
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  disabled?: boolean;
  variant?: "contained" | "outlined" | "text";
  endIcon?: keyof typeof Ionicons.glyphMap;
  startIcon?: keyof typeof Ionicons.glyphMap;
  endIconStyle?: TextStyle;
  startIconStyle?: TextStyle;
}>;

const AppButton = ({
  children,
  onPress,
  style,
  textStyle,
  loading,
  disabled,
  variant = "contained",
  endIcon,
  startIcon,
  endIconStyle,
  startIconStyle,
}: ButtonProps) => {
  const { colors } = useTheme();

  const handlePress = () => {
    HapticManager.selection();
    onPress?.();
  };

  return (
    <RectButton
      onPress={handlePress}
      enabled={!disabled && !loading}
      style={[
        styles.container,
        variant === "contained" && { backgroundColor: colors.primary },
        disabled && { opacity: 0.6 },
        variant === "outlined" && {
          ...styles.outlined,
          backgroundColor: colors.card,
          borderColor: colors.border,
        },
        style,
      ]}
    >
      {loading && (
        <ActivityIndicator
          color={variant === "contained" ? "#fff" : colors.primary}
          style={{ marginRight: 8 }}
        />
      )}
      {typeof children === "string" ? (
        <>
          {startIcon && (
            <Ionicons
              name={startIcon}
              size={20}
              color={variant === "contained" ? "#fff" : colors.text}
              style={{ marginRight: 8, ...startIconStyle }}
            />
          )}
          <Text
            style={[
              styles.text,
              variant === "contained" && { color: "#fff" },
              variant === "outlined" && { color: colors.text },
              variant === "text" && { color: colors.text },
              textStyle,
            ]}
          >
            {children}
          </Text>
          {endIcon && (
            <Ionicons
              name={endIcon}
              size={20}
              color={variant === "contained" ? "#fff" : colors.text}
              style={{ marginLeft: 8, ...endIconStyle }}
            />
          )}
        </>
      ) : (
        children
      )}
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  outlined: {
    borderWidth: 1,
  },
});

export default AppButton;
