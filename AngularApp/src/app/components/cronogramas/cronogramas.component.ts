import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atividade } from 'src/app/models/models';
import { CronogramaService } from 'src/app/services/cronograma.service';
import { ListaAtividadesComponent } from '../lista-atividades/lista-atividades.component';


// Declare anychart as a global variable
declare var require: any;
const anychart = require('anychart');

@Component({
  selector: 'app-cronogramas',
  templateUrl: './cronogramas.component.html',
  styleUrls: ['./cronogramas.component.css']
})
export class CronogramasComponent implements OnInit, AfterViewInit {
  id: string | null = null;
  isNew: boolean = false;
  atividades: Atividade[] = [];
  cronograma: any = {
    titulo: '',
    atividades: []
  };

  constructor(private route: ActivatedRoute, private router: Router, private cronogramaService: CronogramaService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      if (this.id && this.id !== 'new') {
        this.loadCronograma(Number(this.id));
      } else {
        this.isNew = true;
      }
    });
  }

  loadCronograma(id: number): void {
    const cronograma = this.cronogramaService.getCronogramaById(id);
    if (cronograma) {
      this.cronograma = cronograma;
      this.atividades = cronograma.atividades
    } else {
      this.isNew = true;
    }
  }

  ngAfterViewInit(): void {
    if (!this.isNew) {
      this.drawGanttChart();
    }
  }

  drawGanttChart(): void {
    const data = this.atividades
    .filter(at => !at.pai)
    .map(tarefa => ({
      id: tarefa.id,
      name: tarefa.descricao,
      actualStart: tarefa.dataInicioEsperada,
      actualEnd: tarefa.dataFimEsperada,
    }));

    const chart = anychart.ganttProject();
    chart.data(data, 'as-table');
    chart.container('ganttContainer');
    chart.draw();
  }

  createTask(): void {
    console.log('Criar tarefa acionado');
    this.router.navigate(['/atividade/new'], { queryParams: { cronogramaId: this.id } });
  }

  editTask(id: number): void {
     console.log('Editar tarefa acionado', id);
     this.router.navigate(['/atividade', id], { queryParams: { cronogramaId: this.id } });
  }

  saveCronograma(): void {
    if (this.isNew) {
      console.log('Criando novo cronograma:', this.cronograma);
      this.cronogramaService.addCronograma(this.cronograma)
    } else {
      console.log('Atualizando cronograma:', this.cronograma);
      this.cronogramaService.updateCronograma(this.cronograma);
    }
    this.router.navigate(['/cronogramas']);
  }

  cancel(): void {
    this.router.navigate(['/cronogramas']);
  }
}
