import { IPaginaHTML } from "../shared/pagina.interface";
import { IPaginaListagem } from "../shared/pagina.list.interface";
import { IRepositorio } from "../shared/repositorio.interface";
import { Tarefa } from "../tarefas/models/tarefa.model";

import { TarefaRepositoryLocalStorage } from "./repositories/tarefa.repository.local-storage";

class TarefaPaginaListagem implements IPaginaHTML, IPaginaListagem {
  public tabela: HTMLTableElement;

  constructor(private repositiorioTarefas: IRepositorio<Tarefa>) {
    this.configurarElementos();
    this.atualizarTabela();
  }

  configurarElementos(): void {
    this.tabela = document.getElementById("tabela") as HTMLTableElement;
  }

  atualizarTabela(): void {
    const tarefas = this.repositiorioTarefas.selecionarTodos();

    let corpoTabela = this.tabela.getElementsByTagName("tbody")[0];

    tarefas.forEach((tarefa) => {
      const novaLinha = corpoTabela.insertRow();

      novaLinha.className = "linhas";

      Object.values(tarefa).forEach((valor: any) => {
        const novaCelula = novaLinha.insertCell();

        novaCelula.innerText = valor;
      });
    });
  }
}

new TarefaPaginaListagem(new TarefaRepositoryLocalStorage());
