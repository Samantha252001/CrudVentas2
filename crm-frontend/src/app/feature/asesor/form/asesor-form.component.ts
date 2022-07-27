import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../cliente/cliente';
import { ClienteService } from '../../cliente/cliente.service';
import { Persona } from '../../persona/persona';
import { PersonaService } from '../../persona/persona.service';
import { Asesor } from '../asesor';
import { AsesorService } from '../asesor.service';

@Component({
  selector: 'app-asesor-form',
  templateUrl: './asesor-form.component.html'
})
export class AsesorFormComponent implements OnInit {
  [x: string]: any;

  currentAsesor: Asesor = this.resetAsesor();

  constructor(

    private asesorService: AsesorService,
    private activedRouter: ActivatedRoute,
    private router: Router,
    private clienteService: ClienteService



  ) { }

  ngOnInit(): void {

    this.activedRouter.paramMap.subscribe(
      (params) => {
        let id:string ;
        if (params.get("id")){
          id = params.get("id")!;
          this.findById(parseInt (id));
        }
      }
    )

  }
//este metodo se lo manda a llamar con el boton de guardar
  save():void{

    this.asesorService.save(this.currentAsesor)
    .subscribe(
      (response) =>{
        console.log("Registro creado");

        this.currentAsesor = this.resetAsesor();
        this.router.navigate(['/layout/asesor-list']);
      }
    )

  }

  //leer
  findById(id:number):void{
    this.asesorService.findByid(id)
    .subscribe(
      (response: Asesor) =>{
        this.currentAsesor = response;
        this.currentAsesor.clientes.forEach(
          (item) => {
            this.clienteService.findById(item.clienteId).subscribe(

            (auth: Cliente)=> item.nombre = auth.nombre
            )

          }
        )
      }
    )
  }
delete():void{
  this.asesorService.deleteById(this.currentAsesor.vendedorId).subscribe(
    () => {
      console.log("Registro elimindao");
      this.currentAsesor =  this.resetAsesor();
    }
  )
}

resetAsesor (){
  return this.currentAsesor ={

    vendedorId: 0,
    nombre: "",
    telefono: "",
    correo: "",
    equipoVentasId: 0,
    created:"",
    updated:"",
    enable: false,
    id: 0,
    clientes: []
  }
}

onSelect(cliente: Cliente): void{
  this.currentAsesor.clientes.push(cliente)
}

removeCliente(id: number){
  this.currentAsesor.clientes =
  this.currentAsesor.clientes.filter(
    (item) => item.clienteId != id //clienteid sea difereste al id que ingrersa se borrara
  )
}

}
