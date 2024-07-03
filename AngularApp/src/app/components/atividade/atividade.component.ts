import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade, Usuario } from 'src/app/models/models';
import { AtividadeService } from 'src/app/services/atividade.service';
import { UsuariosService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-atividade',
  templateUrl: './atividade.component.html',
  styleUrls: ['./atividade.component.css']
})
export class AtividadeComponent implements OnInit {
  atividade: any = {
    id: 0,
    descricao: '',
    duracao: 0,
    pai: false,
    atividade_pai: null,
    atividade_anterior: null,
    deslocamento_dias_atividade_anterior: 0,
    data_fixa: false,
    tipo_relacao_atividade_anterior: '',
    dataInicioEsperada: null,
    dataFimEsperada: '',
    responsavel: null,
    status_andamento: '',
    status_tempo: '',
  };

  isNew: boolean = false;
  cronogramaId: string | null = null;
  atividades: Atividade[] = [];
  usuarios: Usuario[] = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private atividadeService: AtividadeService,
              private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.cronogramaId = params.get('cronogramaId');
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(`Novo item. id: ${id}`);
      this.isNew = id === 'new';
      if (!this.isNew && id) {
        this.loadAtividade(Number(id));
      }
    });

    this.loadAtividades();
    this.loadUsuarios();
  }

  loadAtividade(id: number): void {
    const atividade = this.atividadeService.getAtividadeById(id);
    if (atividade) {
      this.atividade = {
        ...atividade,
        dataInicioEsperada: this.formatDate(atividade.dataInicioEsperada),
        dataFimEsperada: this.formatDate(atividade.dataFimEsperada)
      };
    }
  }

  formatDate(date: Date | null): string {
    return date ? new Date(date).toISOString().split('T')[0] : '';
  }

  parseDate(dateString: string): Date | null {
    return dateString ? new Date(dateString) : null;
  }

  loadAtividades(): void {
    this.atividades = this.atividadeService.getAtividades();
  }

  loadUsuarios(): void {
    this.usuarios = this.usuarioService.getUsuarios();
  }

  saveAtividade(): void {
    const atividadeToSave = {
      ...this.atividade,
      dataInicioEsperada: this.parseDate(this.atividade.dataInicioEsperada),
      dataFimEsperada: this.parseDate(this.atividade.dataFimEsperada)
    };

    if (this.isNew) {
      console.log('Criando nova atividade:', atividadeToSave);
    } else {
      console.log('Atualizando atividade:', atividadeToSave);
    }

    if (this.cronogramaId != null) {
      this.router.navigate([`/cronograma/${this.cronogramaId}`]);
    }
  }

  cancel(): void {
    if (this.cronogramaId != null) {
      this.router.navigate([`/cronograma/${this.cronogramaId}`]);
    }
  }
}
