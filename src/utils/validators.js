import * as Yup from "yup";

export const loginValidators = 
    Yup.object({
        email: Yup.string().email("Invalid email address!").required("Please enter an email address."),
        password: Yup.string()
                            .required('Please enter a password.') 
                            .min(8, 'Password is too short! ')
                            
    })

export const forgetPasswordValidators = 
    Yup.object({
        password: Yup.string()
                            .required('Please enter a password.') 
                            .min(8, 'Password is too short! ')
                            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),

        re_enter_password: Yup.string()
                            .oneOf([Yup.ref('password'), null], 'Password do not match!')

        });

export const contactFormValidators =  
        Yup.object({
            name : Yup.string().required('Please enter your name.').min(2, 'Invalid Name'),
            email: Yup.string().email("Invalid email address!").required("Please enter an email address."),
            body : Yup.string().required('This is a required field.'),
        });