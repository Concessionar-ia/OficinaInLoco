import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCheckListComponent } from './item-check-list.component';

describe('ItemCheckListComponent', () => {
  let component: ItemCheckListComponent;
  let fixture: ComponentFixture<ItemCheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCheckListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
