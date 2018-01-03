import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataTableExampleComponent } from '../example/components/data-table-example/data-table-example.component';
import { DropdownExampleComponent } from '../example/components/dropdown-example/dropdown-example.component';

/**
 * Represent application main routes.
 * @type Routes
 */
const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'grid'
  },
  {
    component: DataTableExampleComponent,
    path: 'grid'
  },
  {
    component: DropdownExampleComponent,
    path: 'dropdown'
  }
];

/**
 * Application routing module.
 * @class AppRoutingModule
 */
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })]
})
export class AppRoutingModule {
}

