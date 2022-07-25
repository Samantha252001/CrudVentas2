import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule } from '@angular/forms';
import { CustomerToolbarComponent } from './customer/toolbar/customer-toolbar.component';
import { CustomerListComponent } from './customer/list/customer-list.component';



@NgModule({
  declarations: [

    CustomerToolbarComponent,
    CustomerListComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
