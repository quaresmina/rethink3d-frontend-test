import { RegisterFormInput } from ".";

export interface RegisterFormErrors extends RegisterFormInput {}

export const getFormErrors = (input: RegisterFormInput) => {
  let errors: RegisterFormErrors = {};

  if (!input.image) {
    errors.image = "Obrigatório";
  }

  if (!input.email) {
    errors.email = "Obrigatório";
  }

  if (!input.name) {
    errors.name = "Obrigatório";
  }

  if (!input.password) {
    errors.password = "Obrigatório";
  } else if (input.password.length < 7) {
    errors.password = "Senha precisa ter no mínimo 8 caracteres";
  }

  return Object.values(errors).length ? errors : undefined;
};
