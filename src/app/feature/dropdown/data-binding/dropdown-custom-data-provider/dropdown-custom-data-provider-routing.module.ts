import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownCustomDataProviderComponent } from './components/dropdown-custom-data-provider.component';

/**
 * Represent dropdown server side basic data binding routes.
 */
const dropdownCustomDataBindingRoutes: Routes = [
  {
    component: DropdownCustomDataProviderComponent,
    path: ''
  }
];

/**
 * Dropdown server side basic data binding routing module.
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownCustomDataBindingRoutes)]
})
export class DropdownCustomDataProviderRoutingModule {}
