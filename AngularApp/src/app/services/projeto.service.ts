import { Injectable } from '@angular/core';
import { Projeto } from '../models/models';
import { CronogramaService } from './cronograma.service';
import { VistoriaService } from './vistoria.service';
import { PlanoAcaoService } from './planoAcao.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
    private projetos: Projeto[] = [];
  

  constructor(private cronogramaService: CronogramaService, private vistoriaService: VistoriaService, private planoAcaoService: PlanoAcaoService) { 
    this.projetos = 
    [
        {
        id: 1,
        cronograma: this.cronogramaService.getCronogramaById(1),
        vistorias: [],
        planosAcao: [],
      },
      {
        id: 2,
        cronograma: this.cronogramaService.getCronogramaById(2),
        vistorias: [],
        planosAcao: []
      }
    ];




}

  getProjetos() {
    return this.projetos;
  }

  getProjetoById(id: number) {
    return this.projetos.find(p => p.id === id);
  }

  addProjeto(projeto: Projeto) {
    this.projetos.push(projeto);
  }

  updateProjeto(projeto: Projeto) {
    const index = this.projetos.findIndex(p => p.id === projeto.id);
    if (index !== -1) {
      this.projetos[index] = projeto;
    }
  }
}
