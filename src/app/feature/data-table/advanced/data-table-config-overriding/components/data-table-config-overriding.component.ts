import { Component } from '@angular/core';
import { FileType } from 'helper-models';
import { configOverriding } from './data-table-config-overriding.list';

@Component({
  selector: 'app-data-table-config-overriding-component',
  templateUrl: './data-table-config-overriding.component.html',
  styleUrls: ['./data-table-config-overriding.component.scss']
})
export class DataTableConfigOverridingComponent {
  public FileType = FileType;
  public configOverriding = configOverriding;
}
