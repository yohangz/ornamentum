import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownBaseComponent } from './dropdown-main/components/dropdown-base/dropdown-base.component';

/**
 * Represent application dropdown example module routes.
 * @type Routes
 */
const dropdownExampleRoutes: Routes = [
  {
    component: DropdownBaseComponent,
    loadChildren: 'example/feature/dropdown/dropdown-feature/dropdown-feature.module#DropdownFeatureModule',
    path: ''
  }
];

/**
 * Application dropdown example routing module.
 * @class DropdownExampleRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownExampleRoutes)]
})
export class DropdownExampleRoutingModule {
}
