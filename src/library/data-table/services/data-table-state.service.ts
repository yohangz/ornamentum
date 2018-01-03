import { StorageMode } from '../models/data-table-storage-mode.enum';
import { DataTableParams } from '../';
import { GlobalRefService } from '../../utility';
import { Injectable } from '@angular/core';

@Injectable()
export class DataTableStateService {
  private storage: Storage;
  private static GRID_STATE_KEY = 'grid_state_';

  constructor(private globalRefService: GlobalRefService) {
  }

  public set storageMode(value: StorageMode) {
    this.storage = value === StorageMode.LOCAL? this.globalRefService.window.localStorage: this.globalRefService.window.sessionStorage;
  }

  public setState(id: string, value: DataTableParams) {
    this.storage.setItem(`${DataTableStateService.GRID_STATE_KEY}${id}`, JSON.stringify(value));
  }

  public getState(id: string,): DataTableParams {
    return JSON.parse(this.storage.getItem(`${DataTableStateService.GRID_STATE_KEY}${id}`));
  }
}
