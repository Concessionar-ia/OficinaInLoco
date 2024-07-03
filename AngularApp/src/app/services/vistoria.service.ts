import { Injectable } from '@angular/core';
import { Vistoria } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class VistoriaService {
  private vistorias: Vistoria[] = [
    {
      id: 1,
      checkList: [ {id: 1, id_vistoria: 1, id_plano_acao: 1, item: 'Lâmpadas estão de acordo', resposta: 'Ruim', comentario: '', midiaReferencia: null, midia: null }],
      planosAcao: [ {id: 1, titulo: 'Teste', descricao: 'Trocar as lâmpadas', checkListOrigem: null, cronogramaOrigem: null, dataInicio: new Date(2024, 6, 1), prazo: new Date(2024, 6, 30), status_andamento: 'Iniciado', duracao: 30, responsavel: null}],
      responsavel: null,
      dataPrevista: null,
      dataRealizacao: null,
      status_andamento: 'Iniciado',
      status_tempo: 'No prazo',
    },
    {
      id: 1,
      checkList: [ {id: 1, id_vistoria: 1, id_plano_acao: 1, item: 'Lâmpadas estão de acordo', resposta: 'Ruim', comentario: '', midiaReferencia: null, midia: null }],
      planosAcao: [ {id: 1, titulo: 'Teste', descricao: 'Trocar as lâmpadas', checkListOrigem: null, cronogramaOrigem: null, dataInicio: new Date(2024, 6, 1), prazo: new Date(2024, 6, 30), status_andamento: 'Iniciado', duracao: 30, responsavel: null}],
      responsavel: null,
      dataPrevista: null,
      dataRealizacao: null,
      status_andamento: 'Iniciado',
      status_tempo: 'No prazo',
    }
  ];

  constructor() { }

  getVistorias() {
    return this.vistorias;
  }

  getVistoriaById(id: number) {
    return this.vistorias.find(v => v.id === id);
  }

  addVistoria(vistoria: Vistoria) {
    this.vistorias.push(vistoria);
  }

  updateVistoria(vistoria: Vistoria) {
    const index = this.vistorias.findIndex(v => v.id === vistoria.id);
    if (index !== -1) {
      this.vistorias[index] = vistoria;
    }
  }
}
