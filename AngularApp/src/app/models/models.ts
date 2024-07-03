export interface Cronograma {
    id: number;
    titulo: string;
    dataInicio: Date;
    dataFim: Date;
    duracao: number;
    atividades: Atividade[];
  }

  export interface Atividade {
    id: number;
    descricao: string; // TODO: Depois melhorar a modelagem disso
    data_fixa: boolean; // a data é fixa ou vem de outra atividade?
    dataInicioEsperada: Date | null;
    dataFimEsperada: Date | null;
    duracao: number;
    responsavel: Usuario | null | undefined;
    pai: boolean;
    status_andamento: string;
    status_tempo: string; // TODO: Calcular e trazer de forma automática do back end.
    atividade_pai: Atividade | null; // ID da tarefa pai, se existir
    atividade_anterior: Atividade | null;
    tipo_relacao_atividade_anterior: string | null; // Após o início | Após o fim
    deslocamento_dias_atividade_anterior: number | null; 
  }
  
  export interface Projeto {
    id: number;
    cronograma: Cronograma | null | undefined;
    vistorias: Vistoria[];
    planosAcao: PlanoAcao[];
  }


  export interface Vistoria {
    id: number;
    checkList: ItensCheckList[];
    planosAcao: PlanoAcao[];
    responsavel: Usuario | null;
    dataPrevista: Date | null;
    dataRealizacao: Date | null;
    status_andamento: string; // Como em 'Atividade'
    status_tempo: string; // Como em 'Atividade'
  }

  export interface PlanoAcao {
    id: number;
    titulo: string;
    descricao: string;
   // id_vistoria: number | null;
    checkListOrigem: ItensCheckList | null ;
    cronogramaOrigem: Cronograma | null;
    dataInicio: Date | null;
    prazo: Date | null;
    status_andamento: string;
    duracao: number;
    responsavel: Usuario | null | undefined;
  }

  export interface Usuario {
    id: number;
    nome: string;
    login: string;
    senha: string;
  }

  export interface ItensCheckList{
    id: number;
    id_vistoria: number | null;
    id_plano_acao: number | null;
    item: string; // TODO: Depois melhorar a modelagem disso.
    resposta: string;
    comentario: string;
    midiaReferencia: any | null;
    midia: any | null; //foto, vídeo, etc.
  }