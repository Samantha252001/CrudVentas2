import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';

import { FormsModule } from '@angular/forms';
import { ProductToolbarComponent } from './product/toolbar/product-toolbar.component';
import { ProductComponent } from './product/form/product.component';
import { ProductListComponent } from './product/list/product-list.component';
import { PersonComboboxComponent } from './person/person-combobox/person-combobox.component';
import { RelatedSearchComponent } from './related/search/related-search.component';




@NgModule({
  declarations: [
    
  
   
  
    ProductComponent,
    ProductToolbarComponent,
    ProductListComponent,
    PersonComboboxComponent,
    RelatedSearchComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule
  ]
})
export class FeatureModule { }
