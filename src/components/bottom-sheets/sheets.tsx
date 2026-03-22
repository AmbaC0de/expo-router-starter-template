import { SheetDefinition, SheetRegister } from "react-native-actions-sheet";
import ThemeSheet from "./ThemeSheet";

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module "react-native-actions-sheet" {
  interface Sheets {
    "theme-sheet": SheetDefinition;
  }
}

export const Sheets = () => {
  return (
    <SheetRegister
      sheets={{
        "theme-sheet": ThemeSheet,
      }}
    />
  );
};
