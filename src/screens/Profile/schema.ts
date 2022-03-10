import * as Yup from 'yup';

export const profileSchemaValidation = Yup.object().shape({
    driverLicense: Yup.string()
    .required('CNH é um campo obrigatório.'),
    email: Yup.string()
    .email('Digite um email válido.')
    .required('Email é um campo obrigatório.'),
    name: Yup.string()
    .required('Nome é um campo obrigatório.'),
});
