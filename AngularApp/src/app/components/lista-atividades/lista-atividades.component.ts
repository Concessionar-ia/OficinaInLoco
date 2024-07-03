import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Atividade } from 'src/app/models/models';

@Component({
  selector: 'app-lista-atividades',
  templateUrl: './lista-atividades.component.html',
  styleUrls: ['./lista-atividades.component.css']
})
export class ListaAtividadesComponent {
  @Input() atividades: Atividade[] = [];
  @Input() cronogramaId!: number;

  searchTerm: string = '';
  statusTempoFilter: string = '';
  statusAndamentoFilter: string = '';
  dataInicioFilterInicio: string = '';
  dataInicioFilterFim: string = '';
  responsavelFilter: string = '';
  descricaoFilter: string = '';

  filteredAtividades: Atividade[] = [];

  constructor(private router: Router) {}

  ngOnChanges(): void {
    this.applyFilters();
  }

  editTask(id: number): void {
    this.router.navigate(['/atividade', id], { queryParams: { cronogramaId: this.cronogramaId } });
  }

  createTask(): void {
    this.router.navigate(['/atividade/new'], { queryParams: { cronogramaId: this.cronogramaId } });
  }

  isTarefaPai(atividade: Atividade): boolean {
    return this.atividades.some(a => a.atividade_pai?.id === atividade.id);
  }

  applyFilters(): void {
    this.filteredAtividades = this.atividades.filter(atividade => {
      return (
        this.filterBySearchTerm(atividade) &&
        this.filterByStatusTempo(atividade) &&
        this.filterByStatusAndamento(atividade) &&
        this.filterByResponsavel(atividade) &&
        this.filterByDescricao(atividade)
      );
    });
    console.log(`Atividades filtradas: ${this.filteredAtividades}`)
  }

  filterBySearchTerm(atividade: Atividade): boolean {
    if (!this.searchTerm) {
      return true;
    }
    return atividade.descricao.toLowerCase().includes(this.searchTerm.toLowerCase());
  }

  filterByStatusTempo(atividade: Atividade): boolean {
    if (!this.statusTempoFilter) {
      return true;
    }
    return atividade.status_tempo === this.statusTempoFilter;
  }

  filterByStatusAndamento(atividade: Atividade): boolean {
    if (!this.statusAndamentoFilter) {
      return true;
    }
    return atividade.status_andamento === this.statusAndamentoFilter;
  }

  filterByResponsavel(atividade: Atividade): boolean {
    if (!this.responsavelFilter) {
      return true;
    }
    const nomeResponsavel = atividade.responsavel?.nome?.toLowerCase();
    return nomeResponsavel ? nomeResponsavel.includes(this.responsavelFilter.toLowerCase()) : false;
  }

  filterByDescricao(atividade: Atividade): boolean {
    if (!this.descricaoFilter) {
      return true;
    }
    const desc = atividade.descricao?.toLowerCase();
    const regex = new RegExp(this.descricaoFilter, 'i'); // Cria uma expressão regular para correspondência insensível a maiúsculas e minúsculas
    return desc ? regex.test(desc) : false;
  }
}
