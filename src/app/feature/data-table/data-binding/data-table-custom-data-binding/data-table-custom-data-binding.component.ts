import {Component} from '@angular/core';
import {FileType} from "helper-models";
import {demoSnippet, serverSideBasicUsage, serverSideBasicUsageWithMap} from "./data-table-custom-data-binding.list";

@Component({
  selector: 'app-data-table-custom-data-binding',
  templateUrl: './data-table-custom-data-binding.component.html',
  styleUrls: ['./data-table-custom-data-binding.component.scss']
})
export class DataTableCustomDataBindingComponent {
  public FileType = FileType;

  public demoSnippet = demoSnippet;

  public serverSideBasicUsage = serverSideBasicUsage;
  public serverSideBasicUsageWithMap = serverSideBasicUsageWithMap;
}
