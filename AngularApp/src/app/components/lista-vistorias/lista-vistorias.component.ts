import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vistoria } from 'src/app/models/models';
import { ItensCheckListService } from 'src/app/services/itemCheckList.service';
import { PlanoAcaoService } from 'src/app/services/planoAcao.service';
import { VistoriaService } from 'src/app/services/vistoria.service';

@Component({
  selector: 'app-lista-vistorias',
  templateUrl: './lista-vistorias.component.html',
  styleUrls: ['./lista-vistorias.component.css']
})
export class ListaVistoriasComponent implements OnInit {
  filteredItens: Vistoria[] = [];
  itens: Vistoria[] = [];

  statusAndamentoFilter: string = '';
  statusTempoFilter: string = '';
  dataPrevista: string = '';
  responsavelFilter: string = '';


  constructor(private router: Router,
             private vistoriaService: VistoriaService) {}

  ngOnInit(): void {
    this.applyFilters();
  }

  navigateToVistoria(id: number): void{
    this.router.navigate(['/vistoria', id]);
  }

  navigateToNew(): void {
    this.router.navigate(['/vistoria/new'])
  }

  applyFilters(): void {
    this.itens = this.vistoriaService.getVistorias();

    this.filteredItens = this.itens.filter(v => {
      return (
        this.filterByStatusAndamento(v) &&
        this.filterByResponsavel(v) &&
        this.filterByStatusTempo(v)
      );
    });
    console.log(`Vistorias filtrados: ${this.filteredItens}`)
  }

  filterByStatusAndamento(vistoria: Vistoria) : boolean {
    if (!this.statusAndamentoFilter) {
      return true;
    }
    return vistoria.status_andamento === this.statusAndamentoFilter;
  }

  filterByResponsavel(vistoria: Vistoria): boolean {
    if (!this.responsavelFilter) {
      return true;
    }
    const nomeResponsavel = vistoria.responsavel?.nome?.toLowerCase();
    return nomeResponsavel ? nomeResponsavel.includes(this.responsavelFilter.toLowerCase()) : false;
  }

  filterByStatusTempo(vistoria: Vistoria): boolean {
    if (!this.statusTempoFilter) {
      return true;
    }
    return vistoria.status_tempo === this.statusTempoFilter;
  }

  // TODO: Verificar se faltam outros filtros.
}
