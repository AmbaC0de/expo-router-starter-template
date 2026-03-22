import AppButton from "@/components/ui/AppButton";
import { useAppDispatch } from "@/store/hooks";
import { login } from "@/store/slices/auth";
import React from "react";
import { StyleSheet, View } from "react-native";

const SignIn = () => {
  const dispatch = useAppDispatch();

  const handleSignIn = () => {
    dispatch(login());
  };
  return (
    <View style={styles.container}>
      <AppButton onPress={handleSignIn}>Sign in</AppButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignIn;
