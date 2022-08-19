import { IPaginaFormulario } from "../shared/pagina.create.interface";
import { IPaginaHTML } from "../shared/pagina.interface";
import { IRepositorio } from "../shared/repositorio.interface";
import { Prioridade } from "./models/prioridade.enum";
import { Tarefa } from "../tarefas/models/tarefa.model";
import { TarefaRepositoryLocalStorage } from "./repositories/tarefa.repository.local-storage";

class TarefaPaginaCadastro implements IPaginaHTML, IPaginaFormulario {
  private txtDescricao: HTMLInputElement;
  private rdbPrioridade: HTMLInputElement;
  private btnSalvar: HTMLButtonElement;

  constructor(private repositorioTarefas: IRepositorio<Tarefa>) {
    this.configurarElementos();
  }

  configurarElementos(): void {
    this.txtDescricao = document.getElementById(
      "txtDescricao"
    ) as HTMLInputElement;

    this.btnSalvar = document.getElementById("btnSalvar") as HTMLButtonElement;

    // operador discard _
    this.btnSalvar.addEventListener("click", (_evt) => this.gravarRegistros());
  }

  gravarRegistros(): void {
    this.rdbPrioridade = document.querySelector(
      'input[type="radio"]:checked'
    ) as HTMLInputElement;

    const prioridade = this.rdbPrioridade.value as Prioridade;

    const novaTarefa = new Tarefa(this.txtDescricao.value, prioridade);

    this.repositorioTarefas.inserir(novaTarefa);

    // método para redirecionar usuario
    window.location.href = "tarefa.list.html";
  }
}

new TarefaPaginaCadastro(new TarefaRepositoryLocalStorage());
