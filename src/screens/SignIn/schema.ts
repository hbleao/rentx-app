import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um email válido.')
    .required('Email é um campo obrigatório.'),
  password: Yup.string()
    .required('Senha é um campo obrigatório.')
});
