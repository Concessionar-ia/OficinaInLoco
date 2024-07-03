import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItensCheckList } from 'src/app/models/models';
import { ItensCheckListService } from 'src/app/services/itemCheckList.service';

@Component({
  selector: 'app-lista-item-check-list',
  templateUrl: './lista-item-check-list.component.html',
  styleUrls: ['./lista-item-check-list.component.css']
})
export class ListaItemCheckListComponent implements OnInit {
  @Input() itens: ItensCheckList[] = [];
  @Input() vistoriaId!: number;

  filteredItens: ItensCheckList[] = [];


  constructor(private router: Router, private checkListService: ItensCheckListService) { }

  ngOnInit(): void {
    this.filteredItens = this.checkListService.getItemByVistoriaId(this.vistoriaId)
  }

  editItem(id: number): void {
    this.router.navigate(['/item/', id], { queryParams: { vistoriaId: this.vistoriaId } });
  }

  preencherItem(id: number): void {
    this.router.navigate(['/item/preencher', id], { queryParams: { vistoriaId: this.vistoriaId } });
  }

  createItem(): void {
    this.router.navigate(['/item/', 'new'], { queryParams: { vistoriaId: this.vistoriaId } });
  }

}
