import { Component } from '@angular/core';
import { Funcionario } from '../model/funcionario';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent {

  funcionarios: Funcionario[] = [];
  displayedColumns = ['id','nome', 'sobrenome','departamento','turno','dataCriacao','dataAlteracao'];

}
