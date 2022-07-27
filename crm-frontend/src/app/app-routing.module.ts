import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [//aqui se coloca las rutras donde estaran enseradas por llaves
/*las rutas se escribiran con path  dos puntos y especificamos las rutas que van
//a estar escuchando como en este caso tenemos person pues ira person
{path: "asesor", component:AsesorComponent},
//todo lo que entre a person a la url de nuestro frontend lo va a mapear
//y lova a redirecciones a este componente
{path: "asesor/:id", component:AsesorComponent},
{path: "authority", component:AsesorComponent},
*/

{path: '', redirectTo: '/layout', pathMatch: 'full'},

{path: 'feature', loadChildren:() => import('./feature/feature.module').then(m => m.FeatureModule)},
{path: 'layout', loadChildren:() => import('./layout/layout.module')
.then(m => m.LayoutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
