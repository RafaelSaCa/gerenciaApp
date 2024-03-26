import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FuncionariosRoutingModule } from './funcionarios-routing.module';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';

@NgModule({
  declarations: [FuncionariosComponent],
  imports: [
    CommonModule,
    FuncionariosRoutingModule,
    AppMaterialModule
  ],
})
export class FuncionariosModule {}
