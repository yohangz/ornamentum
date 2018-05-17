import { EventEmitter, Injectable } from '@angular/core';

import { ReplaySubject } from 'rxjs';

import { DropdownComponent } from '../components/dropdown/dropdown.component';

/**
 * Dropdown event state service.
 * Manage dropdown event handler state.
 */
@Injectable()
export class DropdownEventStateService {
  public dataFetchStream = new EventEmitter<boolean>();
  public dataBoundStream = new EventEmitter<void>();
  public selectChangeStream = new EventEmitter<any[] | any>();
  public initStream = new EventEmitter<DropdownComponent>();
  public staticDataSourceStream = new ReplaySubject<any[]>(1);
}
