import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Funcionario } from '../model/funcionario';
import { Observable, delay, first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private readonly ApiUrl = 'api/funcionarios';

  constructor( private http : HttpClient) { }

  list() : Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.ApiUrl)
                .pipe( first(), delay(1000));
    }

  salvar( funcionario : Partial<Funcionario>){
     return this.http.post<Funcionario>(this.ApiUrl, funcionario);
  }
}
