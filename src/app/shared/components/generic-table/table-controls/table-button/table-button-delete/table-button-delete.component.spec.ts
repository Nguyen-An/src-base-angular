import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableButtonDeleteComponent } from './table-button-delete.component';

describe('TableButtonDeleteComponent', () => {
  let component: TableButtonDeleteComponent;
  let fixture: ComponentFixture<TableButtonDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableButtonDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableButtonDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});