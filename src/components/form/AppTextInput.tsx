import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { useState } from "react";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from "react-hook-form";
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import IconButton from "@/components/ui/IconButton";

type AppTextInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  placeholder?: string;
  rules?: Omit<
    RegisterOptions<T, any>,
    "setValueAs" | "disabled" | "valueAsNumber" | "valueAsDate"
  >;
  multiline?: boolean;
  numberOfLines?: number;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  startIcon?: keyof typeof Ionicons.glyphMap;
};

const AppTextInput = <T extends FieldValues>({
  control,
  name,
  inputStyle,
  containerStyle,
  placeholder,
  rules,
  multiline = false,
  numberOfLines,
  keyboardType = "default",
  secureTextEntry = false,
  startIcon,
}: AppTextInputProps<T>) => {
  const { colors } = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <View style={containerStyle}>
          <View
            style={[
              styles.inputContainer,
              {
                borderWidth: error ? 1 : 0,
                borderColor: error ? colors.error : "none",
                backgroundColor: colors.card,
              },
            ]}
          >
            {startIcon && (
              <Ionicons
                name={startIcon}
                size={20}
                color={colors.textSecondary}
              />
            )}

            <TextInput
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={colors.textSecondary}
              multiline={multiline}
              keyboardType={keyboardType}
              numberOfLines={numberOfLines}
              secureTextEntry={secureTextEntry && !isPasswordVisible}
              style={[
                styles.input,
                {
                  color: colors.text,
                },
                inputStyle,
              ]}
              cursorColor={colors.text}
            />
            {secureTextEntry && (
              <IconButton
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              >
                <Ionicons
                  name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color={colors.textSecondary}
                />
              </IconButton>
            )}
          </View>
          {error && (
            <Text style={{ color: colors.error, marginTop: 4, marginLeft: 4 }}>
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginRight: 10,
    height: 55,
    fontSize: 16,
  },
});

export default AppTextInput;
