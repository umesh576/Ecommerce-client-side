import * as yup from "yup";
export const signupSchema = yup.object({
  firstName: yup.string().required("name must be required"),
  lastName: yup.string().required("name must be required"),

  password: yup
    .string()
    .required()
    .min(4, "passwird must be more than 4 letter"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),

  phoneNumber: yup.string().required("phone number is must be required"),
  conformPassword: yup
    .string()
    .required("conform password is required")
    .oneOf([yup.ref("password")], "password does't match")
    .min(4, "passwird must be more than 4 letter"),
  gender: yup
    .object()
    .shape({
      label: yup.string().optional(),
      value: yup.string().optional(),
    })
    .optional(),
});
