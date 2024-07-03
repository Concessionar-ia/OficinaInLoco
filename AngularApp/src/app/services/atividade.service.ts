  import { Injectable } from '@angular/core';
  import { Atividade } from '../models/models';

  @Injectable({
    providedIn: 'root'
  })
  export class AtividadeService {
    private atividades: Atividade[] = 
    [
      { 
        id: 1, 
        descricao: 'Montagem da oficina', 
        data_fixa: false,
        duracao: 3, 
        dataInicioEsperada: null, 
        dataFimEsperada: null, 
        responsavel : null,
        pai: true,
        status_andamento: 'Não iniciada',
        status_tempo: 'Em atraso',
        atividade_anterior: null,
        atividade_pai: null,
        deslocamento_dias_atividade_anterior: null,
        tipo_relacao_atividade_anterior: null,
      },

      { 
        id: 2, 
        descricao: 'Transporte dos equipamentos X até a oficina após montagem', 
        data_fixa: true,
        duracao: 90, 
        dataInicioEsperada: new Date('2024-06-01T03:00:00.000Z'),
        dataFimEsperada: new Date('2024-08-30T03:00:00.000Z'),
        responsavel: null ,
        pai: false,
        status_andamento: 'Iniciada',
        status_tempo: 'No prazo',
        atividade_pai: null, 
        atividade_anterior: null, 
        deslocamento_dias_atividade_anterior: null, 
        tipo_relacao_atividade_anterior: 'após o fim',
      },

      { 
        id: 3, 
        descricao: 'Ligação da energia elétrica no contêiner',
        data_fixa: false, 
        duracao: 5, 
        dataInicioEsperada: null,// new Date(2024, 7, 1), 
        dataFimEsperada: null, //new Date(2024, 7, 5), 
        responsavel: null ,
        pai: false,
        status_andamento: 'Não iniciada',
        status_tempo: 'No prazo',
        atividade_pai: null, 
        atividade_anterior: null, 
        deslocamento_dias_atividade_anterior: null, 
        tipo_relacao_atividade_anterior: 'após o fim',
      },
    ];

    constructor() { 
      this.atividades[1].atividade_pai = this.atividades[0]; // Filha da atividade de ID 1

      this.atividades[2].atividade_pai = this.atividades[0];
      this.atividades[2].atividade_anterior = this.atividades[1];
      this.atividades[2].deslocamento_dias_atividade_anterior = 2;

      this.calcularDatasAtividades(this.atividades);  
    }

    getAtividades() {
      return this.atividades;
    }

    getAtividadeById(id: number) {
      return this.atividades.find(c => c.id === id);
    }

    addAtividade(atividade: Atividade) {
      this.defineAtividadeComoPai(atividade);
      this.atividades.push(atividade);
    }

    updateAtividade(atividade: Atividade) {
      const index = this.atividades.findIndex(c => c.id === atividade.id);
      if (index !== -1) {
        this.atividades[index] = atividade;
        this.defineAtividadeComoPai(atividade);
      }
    }

    calculaDataInicio(atividade: Atividade): Date | null {
      if (atividade.atividade_anterior && atividade.deslocamento_dias_atividade_anterior !== null) {
        const dataFimAnterior = atividade.atividade_anterior.dataFimEsperada;
        if (dataFimAnterior) {
          const dataInicio = new Date(dataFimAnterior);
          dataInicio.setDate(dataInicio.getDate() + atividade.deslocamento_dias_atividade_anterior);
          return dataInicio;
        }
      }
      return atividade.dataInicioEsperada; // Retorna a data de início esperada se não houver dependência
    }

    calculaDataFim(atividade: Atividade): Date | null {
      const dataInicio = this.calculaDataInicio(atividade);
      if (dataInicio) {
        const dataFim = new Date(dataInicio);
        dataFim.setDate(dataFim.getDate() + atividade.duracao);
        return dataFim;
      }
      return atividade.dataFimEsperada; // Retorna a data de fim esperada se não houver data de início calculada
    }

      // Método para calcular e atualizar todas as datas de início e fim das atividades
      calcularDatasAtividades(atividades: Atividade[]): void {
        atividades.forEach(atividade => {
          atividade.dataInicioEsperada = this.calculaDataInicio(atividade);
          atividade.dataFimEsperada = this.calculaDataFim(atividade);
        });
      }

    defineAtividadeComoPai(atividade: Atividade): void // TEMP: Isso será direto no back end.
    {
      if (atividade.atividade_pai)
        atividade.atividade_pai.pai = true;
    }
  }
