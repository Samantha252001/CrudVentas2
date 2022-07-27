import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-persona-combobox',
  templateUrl: './persona-combobox.component.html'
})
export class PersonaComboboxComponent implements OnInit {
//inicializamos
  personas : Persona[] = [];

  constructor(
    //se inyecta
    private personaService: PersonaService
  ) { }
//defino el output
  @Output() currentPersonaId = new EventEmitter<number>();
  @Input() idInput: number = 0;


  ngOnInit(): void {
    //inicializacion del componente
    this.findAll();
  }

  findAll():void {
    this.personaService.findAll().subscribe(
      (response) => this.personas = response
    )
  }
//este sera el metodo para realizar el cambio y detegte el cambio en
  onChange(value: string): void{
    //este current se coloca el metodo emit para que emita
    //y lo que emitira sera un campo value pero como value es string
    //y voy a emitir un numero entonces voy a parciarlo colocando parseint
this.currentPersonaId.emit(parseInt(value));

  }

}
