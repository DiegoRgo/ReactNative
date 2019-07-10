import React from 'react';
import t from 'tcomb-form-native';

const Form = t.form.Form;

export const LoginStruct = t.struct({
  user: t.String,
  password: t.String
});

export const LoginOptions = {
  fields: {
    user: {
      label: "Nombre Usuario",
      placeholder: "Nombre Usuario"
    },
    password:{
      label: "Contrasenia",
      placeholder: "Contrasenia",
      password: true,
      secureTextEntry: true
    }
  }
};
