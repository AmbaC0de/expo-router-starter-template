import { useAppTheme } from "@/hooks/useAppTheme";
import { ThemeMode } from "@/store/slices/theme";
import BottomSheet, { BottomSheetView } from "@expo/ui/community/bottom-sheet";
import { IoniconsIconName } from "@react-native-vector-icons/ionicons";
import { useTheme } from "expo-router";
import ItemButton from "../ui/ItemButton";

type ThemeSelectionSheetProps = {
  sheetRef?: React.RefObject<BottomSheet | null>;
};

const ThemeSelectionSheet = ({ sheetRef }: ThemeSelectionSheetProps) => {
  const { colors } = useTheme();
  const { setTheme, mode } = useAppTheme();

  const themeOptions: {
    label: string;
    value: ThemeMode;
    icon: IoniconsIconName;
  }[] = [
    { label: "Système", value: "system", icon: "settings" },
    { label: "Clair", value: "light", icon: "sunny" },
    { label: "Sombre", value: "dark", icon: "moon" },
  ];

  const handleThemeSelection = (selectedMode: ThemeMode) => {
    setTheme(selectedMode);
    sheetRef?.current?.close();
  };

  return (
    <BottomSheet
      ref={sheetRef}
      index={-1}
      enablePanDownToClose
      backgroundStyle={{ backgroundColor: colors.background }}
    >
      <BottomSheetView style={{ padding: 20, gap: 12 }}>
        {themeOptions.map((option) => (
          <ItemButton
            key={option.value}
            label={option.label}
            icon={option.icon}
            onPress={() => handleThemeSelection(option.value)}
            isSelected={mode === option.value}
          />
        ))}
      </BottomSheetView>
    </BottomSheet>
  );
};

export default ThemeSelectionSheet;
