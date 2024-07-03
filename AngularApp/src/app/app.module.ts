import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ListaCronogramasComponent } from './components/lista-cronogramas/lista-cronogramas.component';
import { CronogramasComponent } from './components/cronogramas/cronogramas.component';
import { AtividadeComponent } from './components/atividade/atividade.component';
import { PlanosAcaoComponent } from './components/planos-acao/planos-acao.component';
import { ListaPlanosAcaoComponent } from './components/lista-planos-acao/lista-planos-acao.component';
import { ListaAtividadesComponent } from './components/lista-atividades/lista-atividades.component';
import { ListaVistoriasComponent } from './components/lista-vistorias/lista-vistorias.component';
import { VistoriaComponent } from './components/vistoria/vistoria.component';
import { ItemCheckListComponent } from './components/item-check-list/item-check-list.component';
import { ListaItemCheckListComponent } from './components/lista-item-check-list/lista-item-check-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ListaCronogramasComponent,
    CronogramasComponent,
    AtividadeComponent,
    PlanosAcaoComponent,
    ListaPlanosAcaoComponent,
    ListaAtividadesComponent,
    ListaVistoriasComponent,
    VistoriaComponent,
    ItemCheckListComponent,
    ListaItemCheckListComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
