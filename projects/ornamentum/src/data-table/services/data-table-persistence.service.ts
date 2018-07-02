import { Injectable } from '@angular/core';

import { DataTableRequestParams } from '../models/data-table-request-params.model';
import { DataTableStorageMode } from '../models/data-table-storage-mode.enum';

import { GlobalRefService } from '../../utility/utility.module';
import { DataTableConfigService } from './data-table-config.service';

@Injectable()
export class DataTablePersistenceService {
  private storage: Storage;

  constructor(private globalRefService: GlobalRefService,
              private config: DataTableConfigService) {
  }

  public set storageMode(value: DataTableStorageMode) {
    if (this.globalRefService.window) {
      if (value === DataTableStorageMode.LOCAL) {
        this.storage = this.globalRefService.window.localStorage;
      } else {
        this.storage = this.globalRefService.window.sessionStorage;
      }
    }
  }

  public setState(id: string, value: DataTableRequestParams) {
    if (this.globalRefService.window) {
      this.storage.setItem(`${this.config.stateKeyPrefix}${id}`, JSON.stringify(value));
    }
  }

  public getState(id: string): DataTableRequestParams {
    if (this.globalRefService.window) {
      return JSON.parse(this.storage.getItem(`${this.config.stateKeyPrefix}${id}`));
    }

    return null;
  }
}
