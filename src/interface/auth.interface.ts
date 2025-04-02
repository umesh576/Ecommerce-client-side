export interface ILogin {
  email: string;
  password: string;
}

export interface ISignUp {
  firstname: string;
  Lastname: string;
  email: string;
  password: string;
  phonenumber: string;
  conformPassword: string;
  gender?: {
    label?: string;
    value?: string;
  };
}
