import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FuncionariosService } from '../services/funcionarios.service';
import { DialogErroComponent } from 'src/app/shared/components/dialog-erro/dialog-erro.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

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
                      private snackBar : MatSnackBar,
                      private location: Location
  )  { }


  onSubmit(){
    this.service.salvar(this.form.value)
          .subscribe( resposta => this.onSuccess(), erro =>{
            console.log(this.form.value);
            this.onError('Ocorreu um erro ao salvar os dados!')
          }) ;
  }

  private onSuccess(){
    this.snackBar.open('Cadastro realizado com sucesso!','',{duration: 3000});
    this.location.back();
  }

  private onError( msgErro : string){
    this.dialog.open(DialogErroComponent,{

        data: msgErro });
  }


}
