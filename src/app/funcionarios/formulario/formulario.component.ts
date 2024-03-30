import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogErroComponent } from 'src/app/shared/components/dialog-erro/dialog-erro.component';
import { DialogSucessoComponent } from 'src/app/shared/components/dialog-sucesso/dialog-sucesso.component';
import { FuncionariosService } from '../services/funcionarios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {

  form =  this.formBuilder.group({
    nome: ['', [Validators.required]],
    sobrenome:['', [Validators.required]],
    departamento:['', [Validators.required]],
    turno:['', [Validators.required]],
    ativo: true,
    dataCriacao: new Date,
    dataAlteracao: new Date,
  })

  constructor( private formBuilder: NonNullableFormBuilder,
                      private service : FuncionariosService,
                      private dialog: MatDialog,
                      private router: Router

  )  { }


  onSubmit(){
    this.service.salvar(this.form.value)
          .subscribe( resposta => this.onSuccess('Cadastro realizado com sucesso!'), erro =>{
            this.onError('Ocorreu um erro ao salvar os dados!')
       }) ;
  }

  private onSuccess( msgSucesso : string){
    this.dialog.open(DialogSucessoComponent,{
      data: msgSucesso });
      this.router.navigate(['/funcionarios']);
    }


  private onError( msgErro : string){
    this.dialog.open(DialogErroComponent,{
       data: msgErro });
  }



}
