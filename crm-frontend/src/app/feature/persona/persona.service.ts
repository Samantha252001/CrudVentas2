import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8082/api/person";

  constructor(private http: HttpClient
    ) { }

      //Create
      public save(persona: Persona): Observable<Persona>{
        return this.http.post<Persona>(this.url+"/save", persona, this.httpOptions);
      }

      //Read
      public findById(id: number): Observable<Persona>{
        return this.http.get<Persona>(this.url+"/"+id, this.httpOptions);
      }

      public deleteById(id: number): Observable<void>{
        console.log(id);
        return this.http.delete<void>(this.url+"/delete/"+id, this.httpOptions);
      }

      public findAll():Observable<Persona[]>{
        return this.http.get<Persona[]>(this.url+"/findAll", this.httpOptions);
      }

      public findByName(term: string):Observable<Persona[]>{
        return this.http.get<Persona[]>(this.url+"/findByName/"+term, this.httpOptions);
      }


  }
