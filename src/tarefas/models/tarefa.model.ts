import { EntidadeBase } from "../../shared/entidade.model";
import { Prioridade } from "./prioridade.enum";

export class Tarefa extends EntidadeBase {
  public descricao: string;
  public prioridade: Prioridade;
  public dataCriacao: Date;

  constructor(descricao: string, prioridade: Prioridade) {
    super();
    this.descricao = descricao;
    this.dataCriacao = new Date();
    this.prioridade = prioridade;
  }
}
