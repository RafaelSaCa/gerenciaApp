import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogErroComponent } from './components/dialog-erro/dialog-erro.component';
import { AppMaterialModule } from './app-material/app-material.module';
import { DialogSucessoComponent } from './components/dialog-sucesso/dialog-sucesso.component';



@NgModule({
  declarations: [
    DialogErroComponent,
    DialogSucessoComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [DialogErroComponent]
})
export class SharedModule { }
