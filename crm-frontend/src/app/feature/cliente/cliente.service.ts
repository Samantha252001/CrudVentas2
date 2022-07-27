import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(

    private http: HttpClient)
    {}

    private httpOptions = {

      headers: new HttpHeaders({"Content-Type":"application/json"})
    }

    private url:string = "http://localhost:8082/api/cliente"


    public findById(id: number):Observable<Cliente>{
      return this.http.get<Cliente>(this.url+"/findById/"+id, this.httpOptions);
  }

  public findByName(term: string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url+"/findByName/"+term, this.httpOptions);
  }

}
