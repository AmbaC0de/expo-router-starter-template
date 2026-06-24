import { TEXT_STYLE } from "@/theme/typography";
import Ionicons, {
  IoniconsIconName,
} from "@react-native-vector-icons/ionicons";
import { useTheme } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

type ItemButtonProps = {
  label: string;
  icon: IoniconsIconName;
  onPress: () => void;
  isSelected?: boolean;
};

const ItemButton = ({ onPress, isSelected, label, icon }: ItemButtonProps) => {
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          backgroundColor: colors.card,
          borderColor: isSelected ? colors.primary : colors.border,
          borderWidth: isSelected ? 1 : StyleSheet.hairlineWidth,
        },
        styles.container,
      ]}
    >
      <Ionicons name={icon} size={24} color={colors.text} />
      <Text style={{ ...TEXT_STYLE.body, color: colors.text }}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    width: "100%",
    gap: 15,
  },
});

export default ItemButton;
