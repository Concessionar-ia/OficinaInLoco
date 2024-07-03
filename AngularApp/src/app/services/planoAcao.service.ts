import { Injectable } from '@angular/core';
import { PlanoAcao } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class PlanoAcaoService {
  private planosAcao: PlanoAcao[] = [
    {
      id: 1, 
      titulo: 'Plano X',
      descricao: 'plano 1', 
     // id_vistoria: 1, 
      dataInicio: new Date(2024, 6, 1), 
      prazo: new Date(2024, 6, 30), 
      duracao: 30, 
      status_andamento: "Não iniciada",
      responsavel: null,
      checkListOrigem: null,
      cronogramaOrigem: null,
    },
    {
      id: 2, 
      titulo: 'Plano Y',
      descricao: 'plano 2', 
    //  id_vistoria: 1, 
      dataInicio: new Date(2024, 6, 1), 
      prazo: new Date(2024, 6, 30), 
      duracao: 30, 
      status_andamento: "Em andamento",
      responsavel: null,
      checkListOrigem: null,
      cronogramaOrigem: null,
    },
  ];

  constructor() { }

  getPlanosAcao() {
    return this.planosAcao;
  }

  getPlanoAcaoById(id: number) {
    return this.planosAcao.find(p => p.id === id);
  }

  addPlanoAcao(planoAcao: PlanoAcao) {
    this.planosAcao.push(planoAcao);
  }

  updatePlanoAcao(planoAcao: PlanoAcao) {
    const index = this.planosAcao.findIndex(p => p.id === planoAcao.id);
    if (index !== -1) {
      this.planosAcao[index] = planoAcao;
    }
  }
}
