import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableHeadComponent } from './data-table-head.component';

describe('Footer component tests', () => {
  let component: DataTableHeadComponent;
  let fixture: ComponentFixture<DataTableHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DataTableHeadComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(DataTableHeadComponent);
        component = fixture.componentInstance;
      });
  }));

  describe('#hasFilterColumns test', () => {
    it('Should return false when component columns are empty', () => {
      component.columns = [];
      fixture.detectChanges();
      expect(component.hasFilterColumns).toBe(false);
    });

    it('Should return false when component columns are undefined', () => {
      component.columns = undefined;
      fixture.detectChanges();
      expect(component.hasFilterColumns).toBe(false);
    });

    it('Should return false when component columns are null', () => {
      component.columns = null;
      fixture.detectChanges();
      expect(component.hasFilterColumns).toBe(false);
    });

    it('Should return true when component columns are defined and has filterable', () => {
      const columnData: any[] = [
        {
          filterable: false
        },
        {
          filterable: true
        },
        {
          filterable: false
        }
      ];
      component.columns = columnData;
      fixture.detectChanges();
      expect(component.hasFilterColumns).toBe(true);
    });
  });
});
