import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsesorFormComponent } from '../feature/asesor/form/asesor-form.component';
import { AsesorListComponent } from '../feature/asesor/list/asesor-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  {path: '', component:MainComponent,
  children: [
    {path: '', component:DashboardComponent},

    {path: 'dashboard', component:DashboardComponent},
    {path: 'asesor-list', component: AsesorListComponent},
    {path: 'asesor-form', component: AsesorFormComponent },
    {path: 'asesor-form/:id', component: AsesorFormComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
