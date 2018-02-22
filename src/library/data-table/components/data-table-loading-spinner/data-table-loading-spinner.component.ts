import { Component, Input, TemplateRef } from '@angular/core';
import { DataTableConfigService } from '../../services/data-table-config.service';
import { DataTableDataStateService } from '../../services/data-table-data-state.service';

@Component({
  selector: 'ng-data-table-loading-spinner',
  styleUrls: ['./data-table-loading-spinner.component.scss'],
  templateUrl: './data-table-loading-spinner.component.html'
})
export class DataTableLoadingSpinnerComponent {
  @Input()
  public loadingSpinnerTemplate: TemplateRef<any>;

  constructor(public config: DataTableConfigService, public dataStateService: DataTableDataStateService) {
  }

  /**
   * Get loading status.
   * @return {boolean} True if loading.
   */
  public get isLoading(): boolean {
    return this.config.showLoadingSpinner && this.dataStateService.dataLoading;
  }
}
