import { Component, OnInit, createNgModuleRef } from '@angular/core';
import { Router } from '@angular/router';
import { Cronograma } from 'src/app/models/models';
import { CronogramaService } from 'src/app/services/cronograma.service';


@Component({
  selector: 'app-lista-cronogramas', // Altere aqui
  templateUrl: './lista-cronogramas.component.html',
  styleUrls: ['./lista-cronogramas.component.css']
})

export class ListaCronogramasComponent implements OnInit {

  items: Cronograma[] = [];

  constructor(private router: Router, private cronogramaService: CronogramaService) { }

  ngOnInit(): void {
    // Carregar a lista de strings associadas a IDs
    this.items = this.cronogramaService.getCronogramas();
  }

  navigateToCronograma(id: number): void {
    console.log('Navigating to cronograma with ID:', id);
    this.router.navigate(['/cronograma', id]);
  }

  navigateToNew(): void {
    console.log('Navigating to new cronograma');
    this.router.navigate(['/cronograma/new']);
  }

}
