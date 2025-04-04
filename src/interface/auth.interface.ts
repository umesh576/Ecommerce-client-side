export interface ILogin {
  email: string;
  password: string;
}

export interface ISignUp {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  conformPassword: string;
  gender?: {
    label?: string;
    value?: string;
  };
}
