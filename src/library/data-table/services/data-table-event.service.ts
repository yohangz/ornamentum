import { EventEmitter, Injectable } from '@angular/core';
import { HeaderClickEventArgs } from '../models/header-click-event-args.model';

@Injectable()
export class DataTableEventStateService {
  public allRowSelectChangeStream = new EventEmitter<boolean>();
  public dataFetchStream = new EventEmitter<boolean>();
  public headerClickStream = new EventEmitter<HeaderClickEventArgs>();
  public rowSelectChangeStream = new EventEmitter<void>();
}
