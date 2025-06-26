import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { RegisterForm } from "../../components/RegisterForm";
import { ScreenWrapper } from "../../components/ScreenWrapper";
import { Text } from "../../components/Text";
import { ScrollView } from "react-native-gesture-handler";

export function RegisterScreen() {
  return (
    <ScreenWrapper>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.titleContainer}>
          <Text fontWeight="600" fontSize={24}>
            Cadastro
          </Text>
        </View>
        <ScrollView>
          <RegisterForm />
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#d0d0d0",
  },
});
