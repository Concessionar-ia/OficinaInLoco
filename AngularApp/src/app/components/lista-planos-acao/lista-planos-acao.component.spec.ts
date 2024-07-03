import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPlanosAcaoComponent } from './lista-planos-acao.component';

describe('ListaPlanosAcaoComponent', () => {
  let component: ListaPlanosAcaoComponent;
  let fixture: ComponentFixture<ListaPlanosAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPlanosAcaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPlanosAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
