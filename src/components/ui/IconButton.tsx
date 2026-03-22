import { HapticManager } from "@/utils/haptics";
import { useTheme } from "@react-navigation/native";
import React, { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import {
  BorderlessButton,
  BorderlessButtonProps,
} from "react-native-gesture-handler";

type IconButtonProps = PropsWithChildren<BorderlessButtonProps>;

const IconButton = ({ children, style, ...props }: IconButtonProps) => {
  const { colors } = useTheme();
  const handlePress = (args: boolean) => {
    HapticManager.selection();
    props.onPress?.(args);
  };

  return (
    <BorderlessButton
      {...props}
      onPress={handlePress}
      style={[styles.container, { backgroundColor: colors.card }, style]}
      borderless={false}
    >
      {children}
    </BorderlessButton>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 35,
    padding: 10,
  },
});

export default IconButton;
