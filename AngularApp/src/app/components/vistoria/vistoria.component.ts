import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItensCheckList, PlanoAcao, Usuario, Vistoria } from 'src/app/models/models';
import { ItensCheckListService } from 'src/app/services/itemCheckList.service';
import { PlanoAcaoService } from 'src/app/services/planoAcao.service';
import { UsuariosService } from 'src/app/services/usuario.service';
import { VistoriaService } from 'src/app/services/vistoria.service';

@Component({
  selector: 'app-vistoria',
  templateUrl: './vistoria.component.html',
  styleUrls: ['./vistoria.component.css']
})
export class VistoriaComponent implements OnInit {

  id: string | null = null;
  isNew: boolean = false;
  novosItens: ItensCheckList[] = [];
  novosPlanos: PlanoAcao[] = [];
  usuarios: Usuario[] = [];
  vistoria: Vistoria = 
  {
    id: 0,
    checkList: [],
    planosAcao: [],
    responsavel: null,
    dataPrevista: null,
    dataRealizacao: null,
    status_andamento: '',
    status_tempo: '',
  }


  constructor(private route: ActivatedRoute,
     private router: Router,
     private chklistService: ItensCheckListService,
     private planoAcaoService: PlanoAcaoService,
     private usuarioService: UsuariosService,
     private vistoriaService: VistoriaService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id && this.id !== 'new') {
        this.loadVistoria(Number(this.id));
      } else {
        this.isNew = true;
      }
    });
    this.loadUsuarios();
  }

  loadVistoria(id: number): void {
    const vistoria = this.vistoriaService.getVistoriaById(id);
    if (vistoria) {
      this.vistoria = vistoria;
    } else {
      this.isNew = true;
    }
  }

  save(): void {
    if (this.isNew) {
      console.log('Criando nova vistoria:', this.vistoria);
      this.vistoriaService.addVistoria(this.vistoria)
    } else {
      console.log('Atualizando vistoria:', this.vistoria);
      this.vistoriaService.updateVistoria(this.vistoria);
    }
    this.router.navigate(['/listaVistorias']);
  }

  cancel(): void {
    this.router.navigate(['/listaVistorias']);
  }

  loadUsuarios(): void {
    this.usuarios = this.usuarioService.getUsuarios();
  }

}
