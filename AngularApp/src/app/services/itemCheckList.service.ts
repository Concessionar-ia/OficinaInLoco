import { Injectable } from '@angular/core';
import { ItensCheckList } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ItensCheckListService {
  private itensCheckList: ItensCheckList[] = 
  [
    {
      id: 1,
      id_vistoria: 1,
      id_plano_acao: null,
      item: 'As tomadas estão funcionando?',
      resposta: 'Ótimo',
      comentario: 'bom',
      midiaReferencia: null,
      midia: null,
    },
    {
      id: 2,
      id_vistoria: 1,
      id_plano_acao: 1,
      item: 'Os macados hidráulicos estão funcionando?',
      resposta: 'Ótimo',
      comentario: 'bom',
      midiaReferencia: null,
      midia: null,
    },
    {
      id: 3,
      id_vistoria: 1,
      id_plano_acao: 2,
      item: 'O isolamento hídrico está bom?',
      resposta: 'Ótimo',
      comentario: 'bom',
      midiaReferencia: null,
      midia: null,
    }
  ];

  constructor() { }

  getItens() {
    return this.itensCheckList;
  }

  getItemById(id: number) {
    return this.itensCheckList.find(i => i.id === id);
  }

  getItemByVistoriaId(id_vistoria: number) {
    return this.itensCheckList.filter(item => item.id_vistoria === id_vistoria);
  }

  addItem(itemCheckList: ItensCheckList) {
    this.itensCheckList.push(itemCheckList);
  }

  updateItem(itemCheckList: ItensCheckList) {
    const index = this.itensCheckList.findIndex(i => i.id === itemCheckList.id);
    if (index !== -1) {
      this.itensCheckList[index] = itemCheckList;
    }
  }
}
