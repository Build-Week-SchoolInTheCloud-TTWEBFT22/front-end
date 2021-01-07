import * as yup from 'yup';

export default yup.object().shape({
username: yup
.string()
.required('username is required')
.min(4, 'name must be 4 characters long'),
password: yup
.string()
.required("username is required")
.min(6, "username must be 6 chars long"),
roles: yup 
.string(),
});