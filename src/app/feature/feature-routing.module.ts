import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * Represent application feature module routes.
 * @type Routes
 */
const featureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'data-table'
  },
  {
    loadChildren: './data-table/data-table-example.module#DataTableExampleModule',
    path: 'data-table'
  },
  {
    loadChildren: './dropdown/dropdown-example.module#DropdownExampleModule',
    path: 'dropdown'
  }
];

/**
 * Application feature routing module.
 * @class FeatureRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(featureRoutes)]
})
export class FeatureRoutingModule {
}
