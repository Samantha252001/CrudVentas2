import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

  currentCustomer: Customer = {
    customerId: 0,
    name: "",
    dni: "",
    phone: "",
    email: "",
    created: new Date(),
    updated: new Date(),
    enable: true
  };

  constructor(
    private customerService: CustomerService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activedRoute.paramMap.subscribe(
      (params) => {
        let id:string;
         if (params.get("id")){
          id = params.get("id")!;
          console.log("el id es:" + params.get("id"));
          console.log("el id convertido es:" + id);
          this.findById(parseInt(id));
         }
      }
    )
  }

  save():void{
    console.table(this.currentCustomer);
    this.customerService.save(this.currentCustomer)
    .subscribe(
      (response) => {
        console.log("registro guardar");
        this.currentCustomer = {
          customerId: 0,
          name: "",
          dni: "",
          phone: "",
          email: "",
          created: new Date(),
          updated: new Date(),
          enable: true
        };
      }
    )
  }

  findById(id: number): void {
    this.customerService.findById(id)
    .subscribe(
      (reponse: Customer) => {
        this.currentCustomer = reponse;
        console.log("lectura del id"+this.currentCustomer.customerId);
      }
    )
  }

  delete():void{
    this.customerService.deleteById(this.currentCustomer.customerId)
    .subscribe(
      () => {
        console.log("Registro eliminado");
        this.currentCustomer = {
          customerId: 0,
          name: "",
          dni: "",
          phone: "",
          email: "",
          created: new Date(),
          updated: new Date(),
          enable: true
        };
      }
    )
  }

}
