import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "../inputs/TextInput";
import { Button } from "../Button";
import { ImageInput } from "../inputs/ImageInput";
import { getFormErrors } from "./register-form.utils";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { RoutesEnum } from "../../screens/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface RegisterFormInput {
  image?: string;
  name?: string;
  email?: string;
  password?: string;
}

export function RegisterForm() {
  const [formData, setFormData] = useState<RegisterFormInput>({});
  const { navigate } =
    useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [formErrors, setFormErrors] = useState<RegisterFormInput>();

  const onSubmit = async (data: RegisterFormInput) => {
    const errors = getFormErrors(data);
    setFormErrors(errors);
    if (errors) {
      return;
    }

    AsyncStorage.setItem("@user", JSON.stringify(data));
    navigate(RoutesEnum.Profile);
  };

  return (
    <View style={styles.form}>
      <ImageInput
        onChange={(image) => {
          setFormData((prev) => ({ ...prev, image }));
          setFormErrors((prev) => ({ ...prev, image: undefined }));
        }}
        error={formErrors?.image}
      />

      <TextInput
        placeholder="Nome completo"
        label="Nome completo"
        onChange={(name) => {
          setFormData((prev) => ({ ...prev, name }));
          setFormErrors((prev) => ({ ...prev, name: undefined }));
        }}
        error={formErrors?.name}
      />
      <TextInput
        placeholder="E-mail"
        label="E-mail"
        onChange={(email) => {
          setFormData((prev) => ({ ...prev, email }));
          setFormErrors((prev) => ({ ...prev, email: undefined }));
        }}
        error={formErrors?.email}
      />

      <TextInput
        placeholder="********"
        label="Senha"
        type="password"
        onChange={(password) => {
          setFormData((prev) => ({ ...prev, password }));
          setFormErrors((prev) => ({ ...prev, password: undefined }));
        }}
        error={formErrors?.password}
      />

      <View style={styles.actions}>
        <Button label="Cancelar" variant="secondary"></Button>
        <Button label="Cadastrar" onPress={() => onSubmit(formData)}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 16,
    gap: 16,
    backgroundColor: "#fff",
  },
  actions: {
    flexDirection: "row",
    gap: 14,
  },
});
