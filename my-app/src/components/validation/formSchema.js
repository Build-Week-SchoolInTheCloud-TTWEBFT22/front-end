import * as yup from 'yup';

export default yup.object().shape({
    username: yup
    .string()
    .required('username is required')
    .min(6, 'name must be 6 characters long'),
    primaryemail: yup
    .string()
    .email("must be an email")
    .required("email is required"),
    password: yup
    .string()
    .required("username is required")
    .min(6, "username must be 6 chars long"),
    roles: yup 
    .string()
});