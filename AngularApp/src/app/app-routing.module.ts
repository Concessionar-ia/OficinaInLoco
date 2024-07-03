import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListaCronogramasComponent } from './components/lista-cronogramas/lista-cronogramas.component';
import { CronogramasComponent } from './components/cronogramas/cronogramas.component';
import { AtividadeComponent } from './components/atividade/atividade.component';
import { PlanosAcaoComponent } from './components/planos-acao/planos-acao.component';
import { ListaPlanosAcaoComponent } from './components/lista-planos-acao/lista-planos-acao.component';
import { ListaVistoriasComponent } from './components/lista-vistorias/lista-vistorias.component';
import { VistoriaComponent } from './components/vistoria/vistoria.component';
import { ItemCheckListComponent } from './components/item-check-list/item-check-list.component';

const routes: Routes = [
  {
    path: '', component: HomepageComponent, children: [
      { path: 'listaCronogramas', component: ListaCronogramasComponent },
      //{ path: 'cronograma/new', component: CronogramasComponent },
      { path: 'cronograma/:id', component: CronogramasComponent },
    
      //{ path: 'atividade/new', component: AtividadeComponent },
      { path: 'atividade/:id', component: AtividadeComponent },
    
      { path: 'listaPlanosAcao', component: ListaPlanosAcaoComponent},
      //{ path: 'planoAcao/new', component: PlanosAcaoComponent },
      { path: 'planoAcao/:id', component: PlanosAcaoComponent },
    
      { path: 'listaVistorias', component: ListaVistoriasComponent},
      { path: 'vistoria/:id', component: VistoriaComponent },
      //{ path: 'vistoria/new', component: VistoriaComponent },

      //{ path: 'item/new', component: ItemCheckListComponent},
      { path: 'item/:id', component: ItemCheckListComponent},
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
