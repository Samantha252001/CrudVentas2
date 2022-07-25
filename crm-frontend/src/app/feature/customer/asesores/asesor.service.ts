import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Asesor } from './asesor';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8080/api/asesor";


  public findAll():Observable<Asesor[]>{
    return this.http.get<Asesor[]>(this.url+"/findAll", this.httpOptions);
  }
}
