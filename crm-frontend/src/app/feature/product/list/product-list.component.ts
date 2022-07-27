import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  constructor(
    private productService: ProductService
  ) { }

  products:Product[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.productService.findAll().subscribe(
      (response) => {
        this.products = response;
      }
    );
  }

  findByName(term: string){
    if (term.length===0){
      this.findAll();
    }

    if (term.length>=2){
      this.productService.findByName(term).subscribe(
        (response) => this.products = response
      )
    }

  }

}
