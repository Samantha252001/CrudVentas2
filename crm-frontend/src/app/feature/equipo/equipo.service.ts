import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from './equipo';


@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(

    private http: HttpClient)
    {}

    private httpOptions = {

      headers: new HttpHeaders({"Content-Type":"application/json"})
    }

    private url:string = "http://localhost:8082/api/equipoVentas"


    public findAll():Observable<Equipo[]>{
      return this.http.get<Equipo[]>(this.url+"/findAll", this.httpOptions);
  }

}
