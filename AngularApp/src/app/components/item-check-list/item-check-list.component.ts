import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItensCheckList } from 'src/app/models/models';
import { ItensCheckListService } from 'src/app/services/itemCheckList.service';

@Component({
  selector: 'app-item-check-list',
  templateUrl: './item-check-list.component.html',
  styleUrls: ['./item-check-list.component.css']
})
export class ItemCheckListComponent implements OnInit {

  item: ItensCheckList = {
    id: 0,
    id_vistoria: null,
    id_plano_acao: null,
    item: '',
    resposta: '',
    comentario: '',
    midiaReferencia: null,
    midia: null
  };

  isNew: boolean = false;
  vistoriaId: string | null = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private checkListService: ItensCheckListService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.vistoriaId = params.get('vistoriaId');
    });

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.isNew = id === 'new';
      if (!this.isNew && id) {
        this.loadItem(Number(id));
      }
    });
  }

  loadItem(id: number): void {
    this.item = this.checkListService.getItemById(id) || this.item;
  }

  save(): void {
    // Implementar lógica para salvar
  }

  cancel(): void {
    // Implementar lógica para cancelar
  }
}
