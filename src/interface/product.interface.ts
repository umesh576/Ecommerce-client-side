/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IProduct {
  _id: string;
  name: string;
  coverImage: string;
  image?: string[];
  price: string;
  createdby: any;
  decription?: string;
}
