import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DropdownOverviewComponent } from './components/dropdown-overview/dropdown-overview.component';

/**
 * Represent application dropdown feature module routes.
 * @type Routes
 */
const dropdownFeatureRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'overview'
  },
  {
    component: DropdownOverviewComponent,
    path: 'overview'
  },
  {
    component: DropdownOverviewComponent,
    path: 'data-binding'
  },
  {
    component: DropdownOverviewComponent,
    path: 'editing'
  },
  {
    component: DropdownOverviewComponent,
    path: 'filtering'
  },
  {
    component: DropdownOverviewComponent,
    path: 'grouping'
  },
  {
    component: DropdownOverviewComponent,
    path: 'paging'
  },
  {
    component: DropdownOverviewComponent,
    path: 'sorting'
  }
];

/**
 * Application dropdown feature routing module.
 * @class DropdownFeatureRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(dropdownFeatureRoutes)]
})
export class DropdownFeatureRoutingModule {
}
