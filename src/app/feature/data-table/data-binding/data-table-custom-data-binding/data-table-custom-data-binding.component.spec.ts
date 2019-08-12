import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableCustomDataBindingComponent } from './data-table-custom-data-binding.component';

describe('DataTableCustomDataProviderComponent', () => {
  let component: DataTableCustomDataBindingComponent;
  let fixture: ComponentFixture<DataTableCustomDataBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableCustomDataBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableCustomDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
