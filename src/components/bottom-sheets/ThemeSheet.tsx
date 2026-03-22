import { useAppTheme } from "@/hooks/useAppTheme";
import { ThemeMode } from "@/store/slices/theme";
import { TEXT_STYLE } from "@/theme/typography";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "@react-navigation/elements";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";
import { SheetManager, SheetProps } from "react-native-actions-sheet";
import { RectButton } from "react-native-gesture-handler";
import AppActionSheet from "./AppActionSheet";

function ThemeSheet(props: SheetProps<"theme-sheet">) {
  const { colors } = useTheme();
  const { mode, setTheme } = useAppTheme();

  const handleSelect = (newMode: ThemeMode) => {
    setTheme(newMode);
    SheetManager.hide(props.sheetId);
  };

  const themes: {
    label: string;
    value: ThemeMode;
    icon: keyof typeof Ionicons.glyphMap;
  }[] = [
    {
      label: "Système",
      value: "system",
      icon: "settings-outline",
    },
    {
      label: "Claire",
      value: "light",
      icon: "sunny-outline",
    },
    {
      label: "Sombre",
      value: "dark",
      icon: "moon-outline",
    },
  ];

  return (
    <AppActionSheet>
      <View style={styles.content}>
        <Text style={styles.title}>Choisir un thème</Text>
        <View style={styles.list}>
          {themes.map((t) => (
            <RectButton
              key={t.value}
              style={[
                styles.item,
                {
                  backgroundColor:
                    mode === t.value ? colors.primary + "10" : "transparent",
                },
              ]}
              onPress={() => handleSelect(t.value)}
            >
              <View style={styles.itemLeft}>
                <View
                  style={[
                    styles.iconContainer,
                    { backgroundColor: colors.border },
                  ]}
                >
                  <Ionicons name={t.icon} size={20} color={colors.text} />
                </View>
                <Text
                  style={[
                    styles.label,
                    mode === t.value && {
                      color: colors.primary,
                      fontWeight: "600",
                    },
                  ]}
                >
                  {t.label}
                </Text>
              </View>
              {mode === t.value && (
                <Ionicons
                  name="checkmark-circle"
                  size={24}
                  color={colors.primary}
                />
              )}
            </RectButton>
          ))}
        </View>
      </View>
    </AppActionSheet>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
  },
  title: {
    ...TEXT_STYLE.h3,
    marginBottom: 24,
    textAlign: "center",
  },
  list: {
    gap: 12,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    borderRadius: 16,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    ...TEXT_STYLE.body,
    fontSize: 16,
  },
});

export default ThemeSheet;
