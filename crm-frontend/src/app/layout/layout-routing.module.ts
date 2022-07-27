import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../feature/product/form/product.component';
import { ProductListComponent } from '../feature/product/list/product-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '',component:MainComponent,
  children:[
    {path: '', component:DashboardComponent},
    {path: 'dashboard', component:DashboardComponent},
    {path: 'product-list', component: ProductListComponent},
    {path: 'product-form', component: ProductComponent},
    {path: 'product-form/:id', component:ProductComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
