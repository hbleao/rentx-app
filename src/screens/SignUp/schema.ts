import * as Yup from 'yup';

export const firstStepSchemaValidation = Yup.object().shape({
    driverLicense: Yup.string()
    .required('CNH é um campo obrigatório.'),
    email: Yup.string()
    .email('Digite um email válido.')
    .required('Email é um campo obrigatório.'),
    name: Yup.string()
    .required('Nome é um campo obrigatório.'),
});

export const secondStepSchemaValidation = Yup.object().shape({
  confirmPassword: Yup.string()
    .test('match', 'As senhas não conferem', function (value) {
      let { password } = this.parent
      return password === value;
    })
    .required('Confirmação de senha é um campo obrigatório.'),
  password: Yup.string()
  .required('Senha é um campo obrigatório.'),
});
