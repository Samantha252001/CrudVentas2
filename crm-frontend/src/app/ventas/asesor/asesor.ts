import { Data } from "@angular/router";
import { Timestamp } from "rxjs";

export interface Asesor{

  vendedorId: number,
  nombre: string,
  telefono: string,
  correo: string,
  equipoVentasId: string,
  created: string,
  updated: string,
  enable: boolean,
}
