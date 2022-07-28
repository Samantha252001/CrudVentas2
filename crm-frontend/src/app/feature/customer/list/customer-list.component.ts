import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {

  constructor(
    private customerService: CustomerService
  ) { }

  customers: Customer[]=[];

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void {
    this.customerService.findAll().subscribe(
      (response) => {
        this.customers = response;
      }
    );
  }

  findByName(term: string){
    if (term.length===0){
      this.findAll();
    }

    if (term.length>=2){
      this.customerService.findByName(term).subscribe(
        (response) => this.customers = response
      )
    }

  }

}
