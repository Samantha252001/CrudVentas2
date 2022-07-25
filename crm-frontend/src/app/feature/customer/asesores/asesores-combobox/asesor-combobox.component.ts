import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Asesor } from '../asesor';
import { AsesorService } from '../asesor.service';

@Component({
  selector: 'app-asesor-combobox',
  templateUrl: './asesor-combobox.component.html'
})
export class AsesorComboboxComponent implements OnInit {

  asesores: Asesor[] = [];

  constructor(
    private asesorService: AsesorService
  ) { }

  @Output() currentVendedorId = new EventEmitter<number>();
  @Input() idInput: number = 0;

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void {
    this.asesorService.findAll().subscribe(
      (response) => this.asesores= response
    )
  }

  onChange(value: string):void {
    this.currentVendedorId.emit(parseInt(value));
  }

}
