import { Component, OnInit } from '@angular/core';
import { Asesor } from '../asesor';
import { AsesorService } from '../asesor.service';

@Component({
  selector: 'app-asesor-list',
  templateUrl: './asesor-list.component.html'
})
export class AsesorListComponent implements OnInit {

  constructor(
    private asesorService: AsesorService
    )
     { }

     asesores:Asesor[] = [];


  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.asesorService.findAll()
      .subscribe(
        (response) =>{ this.asesores = response;

  }
  );
}
//esto es para el output

findByName(term: string ){
  if (term.length==0){
    this.findAll();
  }
  if( term.length>=2)
  this.asesorService.findByName(term).subscribe(
    (response) => this.asesores = response
  )

}

}
