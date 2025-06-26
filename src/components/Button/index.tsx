import { PropsWithChildren } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../Text";

export interface ButtonProps extends PropsWithChildren {
  label?: string;
  variant?: ButtonVariant;
  onPress?: () => void;
}

export type ButtonVariant = "primary" | "secondary";

export function Button({ label, variant = "primary", onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant]]}
      onPress={onPress}
    >
      <Text
        {...styles[variant]}
        fontSize={16}
        fontWeight={600}
        textAlign="center"
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    paddingBlock: 12,
    paddingInline: 10,
    alignItems: "center",
  },
  primary: {
    backgroundColor: "black",
    color: "#FFF",
  },
  secondary: {
    borderColor: "black",
    backgroundColor: "#FFF",
    color: "black",
  },
});
