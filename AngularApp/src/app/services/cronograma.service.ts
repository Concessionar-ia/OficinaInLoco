import { Injectable } from '@angular/core';
import { Cronograma } from '../models/models';
import { AtividadeService } from './atividade.service';

@Injectable({
  providedIn: 'root'
})
export class CronogramaService {
  private cronogramas: Cronograma[] = [
    {
      id: 1,
      titulo: 'Expansão BOX S.J. do Rio Preto 1',
      dataInicio: new Date(2024, 6, 1),
      dataFim: new Date(2024, 9, 5),
      duracao: 93,
      atividades: this.atividadeService.getAtividades()
    },
    {
      id: 2,
      titulo: 'Expansão BOX S.J. do Rio Preto 2',
      dataInicio: new Date(2024, 6, 1),
      dataFim: new Date(2024, 9, 5),
      duracao: 93,
      atividades: this.atividadeService.getAtividades()
    },
    {
      id: 3,
      titulo: 'Expansão BOX S.J. do Rio Preto 3',
      dataInicio: new Date(2024, 6, 1),
      dataFim: new Date(2024, 9, 5),
      duracao: 93,
      atividades: this.atividadeService.getAtividades()
    },
  ];

  constructor(private atividadeService: AtividadeService) { }

  getCronogramas() {
    return this.cronogramas;
  }

  getCronogramaById(id: number) {
    return this.cronogramas.find(c => c.id === id);
  }

  addCronograma(cronograma: Cronograma) {
    this.cronogramas.push(cronograma);
  }

  updateCronograma(cronograma: Cronograma) {
    const index = this.cronogramas.findIndex(c => c.id === cronograma.id);
    if (index !== -1) {
      this.cronogramas[index] = cronograma;
    }
  }
}
