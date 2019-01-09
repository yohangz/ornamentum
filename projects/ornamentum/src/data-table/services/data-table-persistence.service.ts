import { Injectable } from '@angular/core';

import { DataTableRequestParams } from '../models/data-table-request-params.model';

import { DataTableStorageMode } from '../models/data-table-storage-mode.model';

import { GlobalRefService } from '../../utility/utility.module';
import { DataTableConfigService } from './data-table-config.service';

/**
 * Data table persistence service; Manage data table state when persist state options is enabled
 */
@Injectable()
export class DataTablePersistenceService {
  private storage: Storage;

  constructor(private globalRefService: GlobalRefService,
              private config: DataTableConfigService) {
  }

  /**
   * Set table state storage mode
   * @param value Storage mode
   */
  public set storageMode(value: DataTableStorageMode) {
    if (this.globalRefService.isBrowser) {
      if (value === 'local') {
        this.storage = this.globalRefService.window.localStorage;
      } else {
        this.storage = this.globalRefService.window.sessionStorage;
      }
    }
  }

  /**
   * Set table state by identifier
   * @param id Table identifier
   * @param value Data table request parameters object
   */
  public setState(id: string, value: DataTableRequestParams): void {
    if (this.globalRefService.isBrowser) {
      this.storage.setItem(`${this.config.stateKeyPrefix}${id}`, JSON.stringify(value));
    }
  }

  /**
   * Get table state by identifier
   * @param id Table identifier
   * @return Data table request params object
   */
  public getState(id: string): DataTableRequestParams {
    if (this.globalRefService.isBrowser) {
      return JSON.parse(this.storage.getItem(`${this.config.stateKeyPrefix}${id}`));
    }

    return null;
  }
}
