import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Related } from './related';


@Injectable({
  providedIn: 'root'
})
export class RelatedService {

  constructor(
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8080/api/related";


  public findById(id: number):Observable<Related>{
    return this.http.get<Related>(this.url+"/findById/"+id, this.httpOptions);
  }

  public findByName(term: string): Observable<Related[]>{
    return this.http.get<Related[]>(this.url+"/findByName/"+term, this.httpOptions);
  }
}
