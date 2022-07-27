import { Injectable } from '@angular/core';
import { Asesor } from './asesor';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";



@Injectable({
  providedIn: 'root'
})
export class AsesorService {

  private httpOptions = {

    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8082/api/asesor"

  constructor(
    private http: HttpClient
  ) { }

  //CRUD

  //CREATE

  public save(asesor: Asesor): Observable<Asesor>{
    return this.http.post<Asesor>(this.url+"/save", asesor, this.httpOptions )

  }

  //READ
  public findByid(id: number): Observable<Asesor>{
    return this.http.get<Asesor>(this.url+"/"+id, this.httpOptions)
  }

  public deleteById(id: number): Observable<void>{
    return  this.http.delete<void>(this.url+"/deleteById/"+id, this.httpOptions)

  }

  public findAll():Observable<Asesor[]>{
    return this.http.get<Asesor[]>(this.url+"/findAll", this.httpOptions);
}

public findByName(term: string):Observable<Asesor[]>{
  return this.http.get<Asesor[]>(this.url+"/findByName/"+term, this.httpOptions);

}

}
