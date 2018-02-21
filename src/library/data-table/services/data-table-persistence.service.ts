import { Injectable } from '@angular/core';

import { DataTableParams } from '../models/data-table-params.model';
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

  public setState(id: string, value: DataTableParams) {
    this.storage.setItem(`${DataTablePersistenceService.GRID_STATE_KEY}${id}`, JSON.stringify(value));
  }

  public getState(id: string): DataTableParams {
    return JSON.parse(this.storage.getItem(`${DataTablePersistenceService.GRID_STATE_KEY}${id}`));
  }
}
