import { Image, StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { User } from "../../types/user.type";
import { Button } from "../Button";
import { Text } from "../Text";
import { InfoRow } from "./InfoRow";

interface ProfileProps {
  user: User;
  onLogout: () => void;
}

export function Profile({ user, onLogout }: ProfileProps) {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: user.image }} style={styles.image} />
        </View>
        <View style={styles.userInfo}>
          <Text fontWeight={600} textTransform="capitalize">
            {user.name}
          </Text>
          <Text color="#5e5b5b">{user.email}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text fontWeight={700}>Dados da conta</Text>
        <InfoRow label="E-mail" value={user.email} icon="mail" />
        <InfoRow label="Senha" value="********" icon="key" />
      </View>

      <View style={styles.actions}>
        <Button label="Sair" variant="secondary" onPress={onLogout} />
        <Button label="Trocar senha" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  container: {
    flexDirection: "row",
    gap: 10,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#d0d0d0",
  },
  userInfo: {
    justifyContent: "center",
  },
  infoContainer: {
    gap: 10,
    padding: 20,
  },
  actions: {
    flexDirection: "row",
    gap: 14,
    paddingInline: 20,
    paddingBottom: 20,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
