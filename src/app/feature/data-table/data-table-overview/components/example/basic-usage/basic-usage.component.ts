import { Component, ElementRef, Input } from '@angular/core';

import { DataTableSelectMode } from 'ornamentum';

import { Observable, of } from 'rxjs';

import { DataFetchService } from '../../../../../../shared/services';

@Component({
  selector: 'app-basic-usage',
  templateUrl: './basic-usage.component.html'
})
export class BasicUsageComponent {
  public DataTableSelectMode = DataTableSelectMode;

  public dataSource: Observable<any>;

  @Input()
  public parentElement: ElementRef;

  constructor(private dataFetchService: DataFetchService) {
    this.dataSource = of(this.dataFetchService.fetchData());
  }
}
