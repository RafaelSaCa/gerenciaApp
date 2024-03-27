import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'funcionarios' },
  {
    path: 'funcionarios',
    loadChildren: () =>
      import('./funcionarios/funcionarios.module').then(
        (m) => m.FuncionariosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
