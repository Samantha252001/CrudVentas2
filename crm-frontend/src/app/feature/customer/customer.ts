import { Product } from "../product/product";

export interface Customer {
  customerId: number,
  name: string,
  dni: string,
  phone:string,
  email:string,
  created: Date,
  updated: Date,
  enable: boolean,
  vendedorId: number,
  products: Product[]

}
