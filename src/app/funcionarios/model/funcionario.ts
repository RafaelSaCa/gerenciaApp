export interface Funcionario {
  id?: number;
  nome: string;
  sobrenome: string;
  departamento: string;
  ativo: boolean;
  turno: string;
  dataCriacao?: string;
  dataAlteracao?: string;
}
