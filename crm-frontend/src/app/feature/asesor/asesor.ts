
import { Cliente } from "../cliente/cliente";



export interface Asesor{

  vendedorId: number,
  nombre: string,
  telefono: string,
  correo: string,
  equipoVentasId: number,
  created: string,
  updated: string,
  enable: boolean,
  id: number,
  clientes: Cliente[]

}
