import { Component, Input } from '@angular/core';
import { Funcionario } from '../model/funcionario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  @Input() funcionarios!: Funcionario[];
   readonly displayedColumns = ['id','nome', 'sobrenome','departamento','turno','dataCriacao','dataAlteracao','acoes'];

  constructor(  private router: Router, private route: ActivatedRoute) {

  }


  onCadastrar(){
    this.router.navigate(['cadastro'], {relativeTo: this.route});

   //  this.dialog.open(FormularioComponent,{
   //    width:'520px',
   //    height:'580px'
   //  });
 }
}
