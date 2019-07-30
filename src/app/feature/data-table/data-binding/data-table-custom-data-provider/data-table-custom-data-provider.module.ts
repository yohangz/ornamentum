import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableCustomDataProviderRoutingModule} from "./data-table-custom-data-provider-routing.module";

import {CustomDataProviderComponent, DataTableCustomDataProviderComponent} from './index';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../../../shared/shared.module";
import {DataTableModule, DataTableResourceModule} from "../../../../../../projects/ornamentum/src";
import {CustomDataProviderComponentWithMapper} from "./example/custom-data-provider-with-mapper/custom-data-provider.component";


@NgModule({
  declarations: [DataTableCustomDataProviderComponent, CustomDataProviderComponent,CustomDataProviderComponentWithMapper],
  imports: [
    CommonModule,
    DataTableCustomDataProviderRoutingModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableResourceModule.forRoot(),
  ],
})
export class DataTableCustomDataProviderModule { }
