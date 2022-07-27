import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router} from '@angular/router';
import { RelatedService } from '../../related/related.service';
import { Related } from '../../related/related';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  currentProduct: Product = this.resetProduct();

  constructor(
    private productService: ProductService,
    private activedRoute: ActivatedRoute,
    private route:Router,
    private relatedService: RelatedService
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
    this.productService.save(this.currentProduct).subscribe(
      (response) => {
        console.log("registro guardar");
        this.currentProduct = this.resetProduct();
        this.route.navigate(['/layout/product-list']);
      }
    )
  }

  findById(id: number): void{
    this.productService.findById(id)
    .subscribe(
      (response: Product) =>{
        this.currentProduct = response;
        this.currentProduct.relateds.forEach(
          (item) => {
            this.relatedService.findById(item.relatedId).subscribe(
              (relat:Related) => item.name = relat.name
            )
            
          }
        )
      }
    )
  }

  delete():void{
    this.productService.deleteById(this.currentProduct.id)
    .subscribe(
      () => {
        console.log("Registro Eliminado");
        this.currentProduct = this.resetProduct();
      }
    )
  }

  resetProduct(){
    return this.currentProduct = {
      id: 0,
      name: "",
      description: "",
      brand:"",
      model:"",
      image:"",
      created:new Date(),
      update:new Date(),
      enable:true,
      personId: 0,
      relateds: []
    };
  }

  onSelect(related:Related): void {
    this.currentProduct.relateds.push(related);
  }

  removeRelated(id: number){
    this.currentProduct.relateds = 
    this.currentProduct.relateds.filter(
      (item) => item.relatedId != id
    )
  }

}
