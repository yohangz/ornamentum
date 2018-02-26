import { Injectable } from '@angular/core';

import { DataTableRequestParams } from '../models/data-table-request-params.model';
import { StorageMode } from '../models/storage-mode.enum';

import { GlobalRefService } from '../../utility';

@Injectable()
export class DataTablePersistenceService {
  private static GRID_STATE_KEY = 'grid_state_';

  private storage: Storage;

  constructor(private globalRefService: GlobalRefService) {
  }

  public set storageMode(value: StorageMode) {
    this.storage = value === StorageMode.LOCAL ? this.globalRefService.window.localStorage : this.globalRefService.window.sessionStorage;
  }

  public setState(id: string, value: DataTableRequestParams) {
    this.storage.setItem(`${DataTablePersistenceService.GRID_STATE_KEY}${id}`, JSON.stringify(value));
  }

  public getState(id: string): DataTableRequestParams {
    return JSON.parse(this.storage.getItem(`${DataTablePersistenceService.GRID_STATE_KEY}${id}`));
  }
}
