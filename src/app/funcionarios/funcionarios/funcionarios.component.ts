import { Component } from '@angular/core';

import { catchError, Observable, of } from 'rxjs';
import { DialogErroComponent } from 'src/app/shared/components/dialog-erro/dialog-erro.component';

import { Funcionario } from '../model/funcionario';
import { FuncionariosService } from '../services/funcionarios.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent  {

  funcionarios$ : Observable<Funcionario[]>;
  displayedColumns = ['id','nome', 'sobrenome','departamento','turno','dataCriacao','dataAlteracao','acoes'];

  constructor( private service: FuncionariosService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute){

      this.funcionarios$ = this.service.list()
            .pipe( catchError( erro =>{''
              this.onError('Ocorreu algum erro ao carregar as informações!')
              return of ([])
            }));
  }

      onError( msgErro : string){
        this.dialog.open(DialogErroComponent,{
            data: msgErro });
      }

      onCadastrar(){
         this.router.navigate(['cadastro'], {relativeTo: this.route});

        //  this.dialog.open(FormularioComponent,{
        //    width:'520px',
        //    height:'580px'
        //  });
      }
}
