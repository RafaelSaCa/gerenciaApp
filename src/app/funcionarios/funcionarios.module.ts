import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { FormularioComponent } from './formulario/formulario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [FuncionariosComponent, FormularioComponent, ListaComponent],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule

  ],
})
export class FuncionariosModule {}
