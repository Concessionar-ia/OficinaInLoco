import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaVistoriasComponent } from './lista-vistorias.component';

describe('ListaVistoriasComponent', () => {
  let component: ListaVistoriasComponent;
  let fixture: ComponentFixture<ListaVistoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaVistoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaVistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
