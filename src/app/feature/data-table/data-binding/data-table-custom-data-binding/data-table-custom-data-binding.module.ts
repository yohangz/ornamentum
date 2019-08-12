import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DataTableCustomDataBindingRoutingModule} from "./data-table-custom-data-binding-routing.module";

import {CustomDataProviderComponent, DataTableCustomDataBindingComponent} from './index';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../../../../shared/shared.module";
import {DataTableModule, DataTableResourceModule} from "../../../../../../projects/ornamentum/src";
import {CustomDataProviderComponentWithMapper} from "./example/custom-data-provider-with-mapper/custom-data-provider.component";


@NgModule({
  declarations: [DataTableCustomDataBindingComponent, CustomDataProviderComponent,CustomDataProviderComponentWithMapper],
  imports: [
    CommonModule,
    DataTableCustomDataBindingRoutingModule,
    FormsModule,
    SharedModule.forRoot(),
    DataTableModule.forRoot(),
    DataTableResourceModule.forRoot(),
  ],
})
export class DataTableCustomDataBindingModule { }
