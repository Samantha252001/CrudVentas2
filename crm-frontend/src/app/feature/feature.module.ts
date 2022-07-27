import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { AsesorToolbarComponent } from './asesor/toolbar/asesor-toolbar.component';
import { PersonaComboboxComponent } from './persona/persona-combobox/persona-combobox.component';
import { AsesorListComponent } from './asesor/list/asesor-list.component';
import { AsesorFormComponent } from './asesor/form/asesor-form.component';
import { FormsModule } from '@angular/forms';
import { ClienteSearchComponent } from './cliente/search/cliente-search.component';

@NgModule({
  declarations: [
    AsesorFormComponent,
    AsesorToolbarComponent,
    AsesorListComponent,
    PersonaComboboxComponent,
    ClienteSearchComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule

  ],
})
export class FeatureModule {}
