import { Guid } from "./guid.model";

export abstract class EntidadeBase {
  public id: string;
  public linha: number;

  constructor() {
    this.id = new Guid().gerarNovoId();
  }
}
