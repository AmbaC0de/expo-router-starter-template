import { useAppTheme } from "@/hooks/useAppTheme";
import { store } from "@/store";
import { useAppSelector } from "@/store/hooks";
import { selectAuth } from "@/store/slices/auth";
import { Stack, ThemeProvider } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { Provider } from "react-redux";

const InitialLayout = () => {
  const { isAuthenticated } = useAppSelector(selectAuth);
  const { mode, appTheme } = useAppTheme();

  return (
    <ThemeProvider value={appTheme}>
      <StatusBar style={mode === "light" ? "dark" : "light"} />
      {/* <SheetProvider>
        <Sheets /> */}
      <Stack>
        <Stack.Protected guard={isAuthenticated}>
          <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        </Stack.Protected>
        <Stack.Protected guard={!isAuthenticated}>
          <Stack.Screen
            name="(auth)/sign-in"
            options={{ headerShown: false }}
          />
        </Stack.Protected>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      {/* </SheetProvider> */}
    </ThemeProvider>
  );
};

const RootLayout = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <KeyboardProvider>
          <InitialLayout />
        </KeyboardProvider>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default RootLayout;
