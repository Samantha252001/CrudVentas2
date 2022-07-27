import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-search',
  templateUrl: './cliente-search.component.html'
})
export class ClienteSearchComponent implements OnInit {

  constructor(
    private clienteService: ClienteService
  ) { }


@Output() clienteEmiter = new EventEmitter<Cliente>();

  clientes: Cliente[] =[]

  ngOnInit(): void {
  }

  findByName(term: string):void{
   if (term.length>=2){
    this.clienteService.findByName(term).subscribe(
      (response) => {
        console.log(term + " "+ response)

        this.clientes = response
      }
    )
   }
if(term.length===0){
  this.clientes = [];

 }
}

onSelect(cliente: Cliente): void{
  this.clienteEmiter.emit(cliente)

}
  }




