import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cronograma, ItensCheckList, PlanoAcao, Usuario } from 'src/app/models/models';
import { AtividadeService } from 'src/app/services/atividade.service';
import { CronogramaService } from 'src/app/services/cronograma.service';
import { ItensCheckListService } from 'src/app/services/itemCheckList.service';
import { PlanoAcaoService } from 'src/app/services/planoAcao.service';
import { UsuariosService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-planos-acao',
  templateUrl: './planos-acao.component.html',
  styleUrls: ['./planos-acao.component.css']
})
export class PlanosAcaoComponent implements OnInit {
  planoAcao: any =  // Precisar ser nulo para fazermos a transformação das datas usando parse.
  {
    id: 0, 
    titulo: '',
    descricao: '', 
    id_vistoria: 0, 
    dataInicio: null, 
    prazo: null, 
    duracao: 0, 
    status_andamento: '',
    responsavel: null,
    checkListOrigem: null,
    cronogramaOrigem: null,
   
  };

  id: string | null = null;
  isNew: boolean = false;
  itemCheckListId: string | null = null;
  cronogramaId: string | null = null;
//  cronogramaId: string | null = null;
  usuarios: Usuario[] = [];
  planosAcao: PlanoAcao[] = [];
  itensCheckList: ItensCheckList[] = [];
  cronogramas: Cronograma[] = [];



  constructor(private route: ActivatedRoute,
    private router: Router,
    private itemCheckListService: ItensCheckListService,
    private cronogramaService: CronogramaService,
    private planoAcaoService: PlanoAcaoService,
    private usuarioService: UsuariosService) { }

ngOnInit(): void {
this.route.queryParamMap.subscribe(params => {
 // this.cronogramaId = params.get('cronogramaId');
  this.itemCheckListId = params.get('checkListItemId');
  this.cronogramaId = params.get('cronogramaId');
});

this.route.paramMap.subscribe(params => {
  this.id = params.get('id');
  if (this.id && this.id !== 'new') {
    this.loadPlanoAcao(Number(this.id));
  } else {
    this.isNew = true;
  }
});


this.loadPlanosAcao();
this.loadUsuarios();
this.loadItensCheckList();
this.loadCronogramas();
}

loadPlanoAcao(id: number): void {
const planoAcao = this.planoAcaoService.getPlanoAcaoById(id);
if (planoAcao) {
this.planoAcao = {
...planoAcao,
dataInicio: this.formatDate(planoAcao.dataInicio)}}
}

loadPlanosAcao(): void {
  this.planosAcao = this.planoAcaoService.getPlanosAcao();
}

loadItensCheckList(): void {
  this.itensCheckList = this.itemCheckListService.getItens();
}

loadCronogramas() : void {
  this.cronogramas = this.cronogramaService.getCronogramas();
}

formatDate(date: Date | null): string {
return date ? new Date(date).toISOString().split('T')[0] : '';
}

parseDate(dateString: string): Date | null {
return dateString ? new Date(dateString) : null;
}

loadUsuarios(): void {
this.usuarios = this.usuarioService.getUsuarios();
}

savePlanoAcao(): void {
  const planoAcaoToSave = {
  ...this.planoAcao,
  dataInicio: this.parseDate(this.planoAcao.dataInicio),
  };

  if (this.isNew) {
  console.log('Criando novo plano de ação:', planoAcaoToSave);
  } else {
  console.log('Atualizando plano de ação:', planoAcaoToSave);
  }
  this.navegaParaOrigem();
}

cancel(): void {
  this.navegaParaOrigem();
}

navegaParaOrigem(): void
{
  if (this.itemCheckListId != null) {
    this.router.navigate([`/itemCheckList/${this.itemCheckListId}`]);
  }
  else if (this.cronogramaId != null )   {
    this.router.navigate([`/cronograma/${this.cronogramaId}`]);
  }
  else {
    this.router.navigate(['/listaPlanosAcao'])
  }

}

}
