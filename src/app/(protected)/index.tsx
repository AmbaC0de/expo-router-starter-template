import ThemeSelectionSheet from "@/components/bottom-sheets/ThemeSelectionSheet";
import AppButton from "@/components/ui/AppButton";
import BottomSheet from "@expo/ui/community/bottom-sheet";
import { useRef } from "react";
import { StyleSheet } from "react-native";

export default function Index() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <>
      <AppButton onPress={() => bottomSheetRef.current?.present()}>
        Open sheet
      </AppButton>
      <ThemeSelectionSheet sheetRef={bottomSheetRef} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
