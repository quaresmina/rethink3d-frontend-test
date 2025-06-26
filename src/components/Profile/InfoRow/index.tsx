import { StyleSheet, View } from "react-native";
import { Text } from "../../Text";
import { Ionicons } from "@expo/vector-icons";

interface InfoRowProps {
  label: string;
  value: string;
  icon: "key" | "mail";
}

export function InfoRow({ label, value, icon }: InfoRowProps) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoTitle}>
        <Ionicons name={icon} size={24} />
        <Text fontWeight={600}>{label}</Text>
      </View>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: "row",
    paddingBlock: 14,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#d0d0d0",
  },
  infoTitle: { flexDirection: "row", gap: 15 },
});
