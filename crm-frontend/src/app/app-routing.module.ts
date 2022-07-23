import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesorComponent } from './ventas/asesor/asesor.component';

const routes: Routes = [//aqui se coloca las rutras donde estaran enseradas por llaves
//las rutas se escribiran con path  dos puntos y especificamos las rutas que van
//a estar escuchando como en este caso tenemos person pues ira person
{path: "asesor", component:AsesorComponent},
//todo lo que entre a person a la url de nuestro frontend lo va a mapear
//y lova a redirecciones a este componente
{path: "asesor/:id", component:AsesorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
