import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableCustomDataProviderComponent } from './data-table-custom-data-provider.component';

describe('DataTableCustomDataProviderComponent', () => {
  let component: DataTableCustomDataProviderComponent;
  let fixture: ComponentFixture<DataTableCustomDataProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableCustomDataProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableCustomDataProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
