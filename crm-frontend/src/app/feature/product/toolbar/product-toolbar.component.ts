import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-toolbar',
  templateUrl: './product-toolbar.component.html'
})
export class ProductToolbarComponent implements OnInit {

  constructor() { }
  @Output() term = new EventEmitter<string>();
  @Input() item: string= "";

  ngOnInit(): void {
  }

  onInput(InputTerm: string):void{
    this.term.emit(InputTerm);
  }

}
