import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FuncionariosComponent } from './container/funcionarios/funcionarios.component';
import { FormularioComponent } from './container/formulario/formulario.component';

const routes: Routes = [
  { path: '', component: FuncionariosComponent },
  { path: 'cadastro', component: FormularioComponent },
  { path: 'editar/:id', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
