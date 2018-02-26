import { EventEmitter, Injectable } from '@angular/core';
import { DropdownComponent } from '../components/dropdown/dropdown.component';

@Injectable()
export class DropdownEventStateService {
  public dataFetchStream = new EventEmitter<boolean>();
  public dataBoundStream = new EventEmitter<void>();
  public selectChangeStream = new EventEmitter<any[] | any>();
  public initStream = new EventEmitter<DropdownComponent>();
  public allOptionSelectChangeStream = new EventEmitter<boolean>();
}
