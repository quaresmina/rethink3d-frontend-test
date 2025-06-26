import { ReactNode } from "react";
import { Text as NativeText, TextStyle } from "react-native";

interface TextProps extends TextStyle {
  children: ReactNode;
}

export function Text({
  children,
  fontSize = 18,
  color = "black",
  fontWeight = 400,
  ...styles
}: TextProps) {
  return (
    <NativeText style={{ fontSize, color, fontWeight, ...styles }}>
      {children}
    </NativeText>
  );
}
