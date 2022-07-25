import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: '../customer.component.html'
})
export class CustomerComponent implements OnInit {

  currentCustomer: Customer = this.resetCustomer();

  constructor(
    private customerService: CustomerService,
    private activedRoute: ActivatedRoute,
    private route:Router
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
    this.customerService.save(this.currentCustomer)
    .subscribe(
      (response) => {
        console.log("registro guardar");
        this.currentCustomer = this.resetCustomer();
        this.route.navigate(['/layout/customer-list']);
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
        this.currentCustomer = this.resetCustomer
      }
    )
  }

  resetCustomer(){
    return this.currentCustomer = {
      customerId: 0,
      name: "",
      dni: "",
      phone: "",
      email: "",
      created: new Date(),
      updated: new Date(),
      enable: true,
      vendedorId:0
    };
  }

  onSelect(customer:Customer): void {
    this.currentCustomer.customers.push(customer);
  }

  removeCustomer(id: number){
    this.currentCustomer.customers =
    this.currentCustomer.customers.filter(
      (item) => item.customerId != id
    )
  }

}
