import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-asesor-toolbar',
  templateUrl: './asesor-toolbar.component.html'
})
export class AsesorToolbarComponent implements OnInit {

  constructor() { }

  @Output() term = new EventEmitter<string>();


  @Input() item: string="";


  ngOnInit(): void {
  }
//se crea una funcion donde se encargara de escuchar si hay algun cambio
//en la vista el procesa y envia la salida de la data
//con un onInput se utiliza para cuand se comiensea ingresar un Data
//se escuchara o resibira informacion de tipo cadena
  onInput(inputTerm: string):void {
    this.term.emit(inputTerm);


  }

}
