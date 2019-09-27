import { Injectable } from '@angular/core';

import { DataTableRequestParams } from '../models/data-table-request-params.model';

import { DataTableStorageMode } from '../models/data-table-storage-mode.model';

import { GlobalRefService } from '../../utility/utility.module';
import { DataTableConfigService } from './data-table-config.service';

/**
 * Data table persistence service; Manage data table state when persist state options is enabled.
 */
@Injectable()
export class DataTablePersistenceService {
  private storage: Storage;

  constructor(private globalRefService: GlobalRefService, private config: DataTableConfigService) {}

  /**
   * Set table state storage mode.
   * @param value Storage mode.
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
   * Set table state by identifier.
   * @param id Table identifier.
   * @param version Data version.
   * @param value Data table request parameters object.
   */
  public setState(id: string, value: DataTableRequestParams, version: string = 'v1'): void {
    if (this.globalRefService.isBrowser) {
      const data = {
        ver: version,
        val: value
      };
      this.storage.setItem(`${this.config.stateKeyPrefix}${id}`, JSON.stringify(data));
    }
  }

  /**
   * Get table state by identifier.
   * @param id Table identifier.
   * @param version Data version.
   * @return Data table request params object.
   */
  public getState(id: string, version: string = 'v1'): DataTableRequestParams {
    if (this.globalRefService.isBrowser) {
      const data = JSON.parse(this.storage.getItem(`${this.config.stateKeyPrefix}${id}`));

      if (data && data.ver === version) {
        return data.val;
      }
    }

    return null;
  }
}
