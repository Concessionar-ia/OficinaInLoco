import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosAcaoComponent } from './planos-acao.component';

describe('PlanosAcaoComponent', () => {
  let component: PlanosAcaoComponent;
  let fixture: ComponentFixture<PlanosAcaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanosAcaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanosAcaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
