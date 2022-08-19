import { IPaginaHTML } from "../shared/pagina.interface";
import { IPaginaListagem } from "../shared/pagina.list.interface";
import { IRepositorio } from "../shared/repositorio.interface";
import { Contato } from "./models/contato.model";
import { ContatoRepositoryLocalStorage } from "./repositories/contato.repository.local-storage";

class ContatoPaginaListagem implements IPaginaHTML, IPaginaListagem {
  public tabela: HTMLTableElement;

  constructor(private repositiorioContatos: IRepositorio<Contato>) {
    this.configurarElementos();
    this.atualizarTabela();
  }

  configurarElementos(): void {
    this.tabela = document.getElementById("tabela") as HTMLTableElement;
  }

  atualizarTabela(): void {
    const contatos = this.repositiorioContatos.selecionarTodos();

    let corpoTabela = this.tabela.getElementsByTagName("tbody")[0];

    contatos.forEach((contato) => {
      const novaLinha = corpoTabela.insertRow();

      novaLinha.className = "linhas";

      Object.values(contato).forEach((valor: any) => {
        const novaCelula = novaLinha.insertCell();

        novaCelula.innerText = valor;
      });
    });
  }
}

new ContatoPaginaListagem(new ContatoRepositoryLocalStorage());
