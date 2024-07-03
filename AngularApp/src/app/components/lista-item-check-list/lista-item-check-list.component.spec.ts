import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaItemCheckListComponent } from './lista-item-check-list.component';

describe('ListaItemCheckListComponent', () => {
  let component: ListaItemCheckListComponent;
  let fixture: ComponentFixture<ListaItemCheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaItemCheckListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaItemCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
