import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCronogramasComponent } from './lista-cronogramas.component';

describe('CronogramasComponent', () => {
  let component: ListaCronogramasComponent;
  let fixture: ComponentFixture<ListaCronogramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCronogramasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaCronogramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
