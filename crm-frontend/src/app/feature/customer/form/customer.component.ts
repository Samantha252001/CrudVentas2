import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductService } from '../../product/product.service';
import { Product } from '../../product/product';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html'
})
export class CustomerComponent implements OnInit {

  currentCustomer: Customer = this.resetCustomer();

  constructor(
    private customerService: CustomerService,
    private activedRoute: ActivatedRoute,
    private route:Router,
    private productService: ProductService
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
        this.currentCustomer.products.forEach(
          (item) => {
            this.productService.findById(item.id).subscribe(
              (product: Product)=> item.name = product.name
            )
          }
        )
      }
    )
  }

  delete():void{
    this.customerService.deleteById(this.currentCustomer.customerId)
    .subscribe(
      () => {
        console.log("Registro eliminado");
        this.currentCustomer = this.resetCustomer();
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
      enable: false,
      vendedorId:0,
      products:[]
    };
  }

  onSelect(product:Product): void {
    this.currentCustomer.products.push(product);
  }

  removeProduct(id: number){
    this.currentCustomer.products =
    this.currentCustomer.products.filter(
      (item) => item.id != id
    )
  }
}
