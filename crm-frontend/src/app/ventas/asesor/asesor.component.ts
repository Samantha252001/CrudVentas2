//es equivalente al controlador
import { Component, OnInit } from '@angular/core';
import { Asesor } from './asesor';
import { AsesorService } from './asesor.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-asesor',
  templateUrl: './asesor.component.html'
})
export class AsesorComponent implements OnInit {

  currentAsesor: Asesor = {

    vendedorId: 0,
    nombre: "",
    telefono: "",
    correo: "",
    equipoVentasId: "",
    created: "",
    updated: "",
    enable: true,
  };


  constructor(

    private asesorService: AsesorService,
    private activedRouter: ActivatedRoute

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

        this.currentAsesor = {

          vendedorId: 0,
          nombre: "",
          telefono: "",
          correo: "",
          equipoVentasId: "",
          created: "",
          updated: "",
          enable: true,
        };
      }
    )

  }

  //leer
  findById(id:number):void{

    this.asesorService.findByid(id).subscribe(
      (response: Asesor) =>{

        this.currentAsesor = response
      }
    )
  }
delete():void{
  this.asesorService.deleteById(this.currentAsesor.vendedorId).subscribe(
    () => {

      console.log("Registro elimindao");
    }
  )
}

}
