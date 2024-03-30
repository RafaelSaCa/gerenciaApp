import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from '../../model/funcionario';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  @Input() funcionarios!: Funcionario[];
  @Output() cadastrar = new EventEmitter(false);
  @Output() editar = new EventEmitter(false);

   readonly displayedColumns = ['id','nome', 'sobrenome','departamento','turno','dataCriacao','dataAlteracao','acoes'];

  constructor(  private router: Router, private route: ActivatedRoute) { }

  onCadastrar(){
    this.cadastrar.emit(true);
 }

 onEditar(funcionario : Funcionario){
   this.editar.emit(funcionario);
 }

}
