import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private httpOptions = {
    headers: new HttpHeaders({"Content-Type":"application/json"})
  }

  private url:string = "http://localhost:8080/api/customer";

  constructor(
    private http: HttpClient
  ) { }

    //Create
    public save(customer: Customer): Observable<Customer>{
      return this.http.post<Customer>(this.url+"/save", customer, this.httpOptions);
    }

    //Read
    public findById(id: number): Observable<Customer>{
      return this.http.get<Customer>(this.url+"/"+id, this.httpOptions);
    }

    //Delete
    public deleteById(id: number): Observable<void>{
      console.log(id);
      return this.http.delete<void>(this.url+"/delete/"+id, this.httpOptions);
    }

    public findAll():Observable<Customer[]>{
      return this.http.get<Customer[]>(this.url+"/findAll", this.httpOptions);
    }

    public findByName(term: string):Observable<Customer[]>{
      return this.http.get<Customer[]>(this.url+"/findByName/"+term, this.httpOptions);
    }
  }
