import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-customer-toolbar',
  templateUrl: './customer-toolbar.component.html'
})
export class CustomerToolbarComponent implements OnInit {

  constructor() { }
  @Output() term = new EventEmitter<string>();
  @Input() item: string= "";

  ngOnInit(): void {
  }

  onInput(inputTerm: string):void {
    this.term.emit(inputTerm);
  }

}
