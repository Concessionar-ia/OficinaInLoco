import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { PlanoAcao } from 'src/app/models/models';
import { PlanoAcaoService } from 'src/app/services/planoAcao.service';

@Component({
  selector: 'app-lista-planos-acao',
  templateUrl: './lista-planos-acao.component.html',
  styleUrls: ['./lista-planos-acao.component.css']
})
export class ListaPlanosAcaoComponent implements OnInit {
  @Input() vistoriaId!: number;
  filteredItens: PlanoAcao[] = [];
  itens: PlanoAcao[] = [];

  searchTerm: string = '';
  statusAndamentoFilter: string = '';
  dataInicio: string = '';
  responsavelFilter: string = '';

  constructor(private router: Router, private planoAcaoService: PlanoAcaoService) { }

  ngOnInit(): void {
    this.applyFilters();
  }

  navigateToPlanoAcao(id: number): void{
    this.router.navigate(['/planoAcao', id]);
  }

  navigateToNew(): void {
    this.router.navigate(['/planoAcao/new'])
  }

  applyFilters(): void {
    if (!this.vistoriaId)
        this.itens = this.planoAcaoService.getPlanosAcao();


    this.filteredItens = this.itens.filter(plano => {
      return (
        this.filterBySearchTerm(plano) &&
        this.filterByStatusAndamento(plano) &&
        this.filterByResponsavel(plano)
      );
    });
    console.log(`Planos de ação filtrados: ${this.filteredItens}`)
  }


  filterBySearchTerm(plano: PlanoAcao) : boolean {
    if (!this.searchTerm) {
      return true;
    }
    return (plano.descricao.toLowerCase().includes(this.searchTerm.toLowerCase()) || plano.titulo.toLowerCase().includes(this.searchTerm.toLowerCase()) );
  }

  filterByStatusAndamento(plano: PlanoAcao) : boolean {
    if (!this.statusAndamentoFilter) {
      return true;
    }
    return plano.status_andamento === this.statusAndamentoFilter;
  }

  filterByResponsavel(plano: PlanoAcao): boolean {
    if (!this.responsavelFilter) {
      return true;
    }
    const nomeResponsavel = plano.responsavel?.nome?.toLowerCase();
    return nomeResponsavel ? nomeResponsavel.includes(this.responsavelFilter.toLowerCase()) : false;
  }

}
