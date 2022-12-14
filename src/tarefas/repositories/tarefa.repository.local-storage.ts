import { IRepositorioSerializavel } from "../../shared/repositorio-serializavel.interface";
import { IRepositorio } from "../../shared/repositorio.interface";
import { Tarefa } from "../models/tarefa.model";

export class TarefaRepositoryLocalStorage
  implements IRepositorio<Tarefa>, IRepositorioSerializavel
{
  private readonly localStorage: Storage;

  public tarefas: Tarefa[];
  public contatos: Tarefa[];

  constructor() {
    this.localStorage = window.localStorage;

    this.tarefas = this.selecionarTodos();
  }

  public gravar(): void {
    const tarefasJsonString = JSON.stringify(this.tarefas);

    this.localStorage.setItem("tarefas", tarefasJsonString);
  }

  public inserir(registro: Tarefa): void {
    this.tarefas.push(registro);
    this.gravar();
  }

  public editar(registro: Tarefa): void {
    let tarefaIndex = this.tarefas.findIndex(function (tarefa) {
      return tarefa.id == registro.id;
    });

    if (tarefaIndex > -1) {
      this.tarefas[tarefaIndex] = registro;
    }

    this.gravar();
  }

  public remover(registro: Tarefa): void {
    let tarefaIndex = this.tarefas.findIndex(function (tarefa) {
      return tarefa.id == registro.id;
    });

    if (tarefaIndex > -1) {
      this.tarefas.splice(tarefaIndex, 1);
    }

    this.gravar();
  }

  public selecionarTodos(): Tarefa[] {
    const dados = this.localStorage.getItem("tarefas");

    if (!dados) return [];

    return JSON.parse(dados);
  }
}
