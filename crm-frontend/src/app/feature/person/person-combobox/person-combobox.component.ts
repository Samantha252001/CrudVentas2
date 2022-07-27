import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-combobox',
  templateUrl: './person-combobox.component.html'
})
export class PersonComboboxComponent implements OnInit {
  persons: Person[] = [];

  constructor(
    private personService: PersonService
  ) { }

  @Output() currentPersonId = new EventEmitter<number>();
  @Input() idInput: number = 0;
  

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void {
    this.personService.findAll().subscribe(
      (response) => this.persons = response
    )
  }

  onChange(value: string):void {
    this.currentPersonId.emit(parseInt(value));
  }

}