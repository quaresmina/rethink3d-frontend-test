import { TextInput as NativeTextInput, StyleSheet, View } from "react-native";
import { Text } from "../../Text";

interface TextInputProps {
  label?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  error?: string;
  type?: "password" | "text";
}

export function TextInput({
  label,
  placeholder,
  onChange,
  error,
  type = "text",
}: TextInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text fontWeight={600}>{label}</Text>}
      <NativeTextInput
        style={[styles.input, { borderColor: error ? "red" : "#d0d0d0" }]}
        placeholder={placeholder}
        placeholderTextColor="#8d8d8d"
        secureTextEntry={type === "password"}
        onChangeText={(value) => onChange?.(value.trim())}
      />

      {error && (
        <Text fontSize={14} color="red">
          {error}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: "#fff",
    color: "black",
    zIndex: 40,
    fontSize: 16,
  },
});
